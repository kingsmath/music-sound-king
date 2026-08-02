# organize_instruments.ps1
# Pure ASCII PowerShell script to avoid parsing and encoding errors.
# Uses env:WORKSPACE_DIR to safely receive the Korean workspace path.

$scriptDir = $env:WORKSPACE_DIR
if ($null -eq $scriptDir -or $scriptDir -eq "") {
    $scriptDir = $PSScriptRoot
}
if ($null -eq $scriptDir -or $scriptDir -eq "") {
    $scriptDir = Get-Location
}

Write-Host "Workspace directory set to: $scriptDir"

Write-Host "Searching for 'all-samples' folder..."
$allSamplesFolder = Get-ChildItem -Path $scriptDir -Filter "all-samples" -Recurse -Directory | Select-Object -First 1

if ($null -eq $allSamplesFolder) {
    Write-Error "Could not find 'all-samples' directory."
    exit 1
}

$allSamplesDir = $allSamplesFolder.FullName
$parentFolderName = $allSamplesFolder.Parent.Name  # This dynamically gets '악기 음원'
$mappingFilePath = Join-Path $scriptDir "instrument_mapping.json"

Write-Host "Found all-samples at: $allSamplesDir"
Write-Host "Parent folder name: $parentFolderName"
Write-Host "Reading mapping dictionary from: $mappingFilePath"

$mappingRaw = Get-Content -Path $mappingFilePath -Raw -Encoding UTF8
$instrumentMapping = ConvertFrom-Json $mappingRaw

Write-Host "1. Organizing root files..."
$files = Get-ChildItem -Path $allSamplesDir -File

$movedCount = 0
foreach ($file in $files) {
    if ($file.Extension -ne ".mp3") { continue }
    
    $parts = $file.Name.Split("_")
    if ($parts.Count -lt 1) { continue }
    
    $instName = $parts[0]
    
    # Check mapping
    if ($null -ne $instrumentMapping.$instName) {
        $instDir = Join-Path $allSamplesDir $instName
        if (-not (Test-Path $instDir)) {
            New-Item -Path $instDir -ItemType Directory | Out-Null
            Write-Host "Created folder: $instName"
        }
        
        $destPath = Join-Path $instDir $file.Name
        Move-Item -Path $file.FullName -Destination $destPath -Force
        $movedCount++
    }
}
Write-Host "Moved $movedCount files.`n"

Write-Host "2. Generating database..."
$directories = Get-ChildItem -Path $allSamplesDir -Directory
$dbList = New-Object System.Collections.Generic.List[System.Object]

foreach ($dir in $directories) {
    $dirName = $dir.Name
    $mapping = $instrumentMapping.$dirName
    
    if ($null -eq $mapping) {
        Write-Host "Warning: No mapping for $dirName. Defaulting to percussion."
        $mapping = [ordered]@{ ko = $dirName; category = "Percussion" }
    }
    
    $subFiles = Get-ChildItem -Path $dir.FullName -Filter "*.mp3" -File
    if ($subFiles.Count -eq 0) {
        continue
    }
    
    # 1st priority: phrase
    $bestSampleFile = $subFiles | Where-Object { $_.Name -like "*phrase*" } | Sort-Object Length -Descending | Select-Object -First 1
    
    # 2nd priority: very-long
    if ($null -eq $bestSampleFile) {
        $bestSampleFile = $subFiles | Where-Object { $_.Name -like "*very-long*" -or $_.Name -like "*very_long*" } | Sort-Object Length -Descending | Select-Object -First 1
    }
    
    # 3rd priority: largest file
    if ($null -eq $bestSampleFile) {
        $bestSampleFile = $subFiles | Sort-Object Length -Descending | Select-Object -First 1
    }
    
    $relativePath = "$parentFolderName/all-samples/$dirName/$($bestSampleFile.Name)"
    
    $instrumentObj = [ordered]@{
        id = $dirName
        name = $mapping.ko
        category = $mapping.category
        sample_path = $relativePath
    }
    $dbList.Add($instrumentObj)
}

$jsonContent = ConvertTo-Json -InputObject $dbList -Depth 5
$jsContent = "// Instrument Database`nconst instrumentsDB = $jsonContent;"

$outputPath = Join-Path $scriptDir "instruments_data.js"
$utf8NoBom = New-Object System.Text.UTF8Encoding($false)
[System.IO.File]::WriteAllText($outputPath, $jsContent, $utf8NoBom)

Write-Host "Database generated successfully: $outputPath"
