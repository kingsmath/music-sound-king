import os
import shutil
import json

# 경로 설정
BASE_DIR = r"c:\Users\경남교육청\Desktop\악기 퍼즐킹"
SOUND_DIR = os.path.join(BASE_DIR, "악기 음원")
ALL_SAMPLES_DIR = os.path.join(SOUND_DIR, "all-samples")

# 악기별 한글 명칭 및 분류 매핑 사전
INSTRUMENT_MAPPING = {
    # 기존 파일 형태의 악기들 (현악기 & 관악기)
    "banjo": {"ko": "밴조", "category": "현악기"},
    "bass-clarinet": {"ko": "베이스 클라리넷", "category": "관악기"},
    "bassoon": {"ko": "바순", "category": "관악기"},
    "cello": {"ko": "첼로", "category": "현악기"},
    "clarinet": {"ko": "클라리넷", "category": "관악기"},
    "contrabassoon": {"ko": "콘트라바순", "category": "관악기"},
    "double-bass": {"ko": "더블베이스", "category": "현악기"},
    "english-horn": {"ko": "잉글리시 호른", "category": "관악기"},
    "flute": {"ko": "플루트", "category": "관악기"},
    "french-horn": {"ko": "호른", "category": "관악기"},
    "guitar": {"ko": "기타", "category": "현악기"},
    "mandolin": {"ko": "만돌린", "category": "현악기"},
    "oboe": {"ko": "오보에", "category": "관악기"},
    "saxophone": {"ko": "색소폰", "category": "관악기"},
    "trombone": {"ko": "트롬본", "category": "관악기"},
    "trumpet": {"ko": "트럼펫", "category": "관악기"},
    "tuba": {"ko": "튜바", "category": "관악기"},
    "viola": {"ko": "비올라", "category": "현악기"},
    "violin": {"ko": "바이올린", "category": "현악기"},

    # 이미 폴더 형태인 악기들 (주로 타악기, 일부 관악기)
    "agogo bells": {"ko": "아고고 벨", "category": "타악기"},
    "banana shaker": {"ko": "바나나 셰이커", "category": "타악기"},
    "bass drum": {"ko": "베이스 드럼(큰북)", "category": "타악기"},
    "bell tree": {"ko": "벨 트리", "category": "타악기"},
    "cabasa": {"ko": "카바사", "category": "타악기"},
    "castanets": {"ko": "캐스터네츠", "category": "타악기"},
    "Chinese cymbal": {"ko": "중국식 심벌즈", "category": "타악기"},
    "Chinese hand cymbals": {"ko": "중국식 핸드 심벌즈", "category": "타악기"},
    "clash cymbals": {"ko": "클래시 심벌즈", "category": "타악기"},
    "cowbell": {"ko": "카우벨", "category": "타악기"},
    "djembe": {"ko": "젬베", "category": "타악기"},
    "djundjun": {"ko": "둔둔", "category": "타악기"},
    "flexatone": {"ko": "플렉사톤", "category": "타악기"},
    "guiro": {"ko": "귀로", "category": "타악기"},
    "lemon shaker": {"ko": "레몬 셰이커", "category": "타악기"},
    "motor horn": {"ko": "경적(데시벨 혼)", "category": "타악기"},
    "ratchet": {"ko": "래챗(돌리개)", "category": "타악기"},
    "sheeps toenails": {"ko": "양 발톱 셰이커", "category": "타악기"},
    "sizzle cymbal": {"ko": "시즐 심벌", "category": "타악기"},
    "sleigh bells": {"ko": "썰매 방울", "category": "타악기"},
    "snare drum": {"ko": "스네어 드럼(작은북)", "category": "타악기"},
    "spring coil": {"ko": "스프링 코일", "category": "타악기"},
    "squeaker": {"ko": "스퀴커(삑삑이)", "category": "타악기"},
    "strawberry shaker": {"ko": "딸기 셰이커", "category": "타악기"},
    "surdo": {"ko": "수르두", "category": "타악기"},
    "suspended cymbal": {"ko": "서스펜디드 심벌", "category": "타악기"},
    "swanee whistle": {"ko": "슬라이드 피리", "category": "관악기"},
    "tam-tam": {"ko": "탐탐(공)", "category": "타악기"},
    "tambourine": {"ko": "탬버린", "category": "타악기"},
    "tenor drum": {"ko": "테너 드럼", "category": "타악기"},
    "Thai gong": {"ko": "태국식 징", "category": "타악기"},
    "tom-toms": {"ko": "탐탐 드럼", "category": "타악기"},
    "train whistle": {"ko": "기차 피리", "category": "관악기"},
    "triangle": {"ko": "트라이앵글", "category": "타악기"},
    "vibraslap": {"ko": "비브라슬랩", "category": "타악기"},
    "washboard": {"ko": "워시보드(빨래판)", "category": "타악기"},
    "whip": {"ko": "채찍(윕)", "category": "타악기"},
    "wind chimes": {"ko": "윈드 차임", "category": "타악기"},
    "woodblock": {"ko": "우드블록", "category": "타악기"}
}

def organize_files():
    print("1. 루트 파일 분류 작업 시작...")
    # all-samples 폴더 아래의 파일들 리스트업
    files = [f for f in os.listdir(ALL_SAMPLES_DIR) if os.path.isfile(os.path.join(ALL_SAMPLES_DIR, f))]
    
    moved_count = 0
    for filename in files:
        if not filename.endswith(".mp3"):
            continue
        
        # 파일명에서 첫 번째 '_' 이전이 악기 이름이 됨
        parts = filename.split("_")
        if not parts:
            continue
            
        inst_name = parts[0]
        
        # 특수 케이스: bass-clarinet, english-horn 등은 이미 온전한 문자열로 분리됨
        if inst_name in INSTRUMENT_MAPPING:
            # 악기명 폴더 생성
            inst_dir = os.path.join(ALL_SAMPLES_DIR, inst_name)
            if not os.path.exists(inst_dir):
                os.makedirs(inst_dir)
                print(f"새 폴더 생성: {inst_name}")
            
            src_path = os.path.join(ALL_SAMPLES_DIR, filename)
            dst_path = os.path.join(inst_dir, filename)
            shutil.move(src_path, dst_path)
            moved_count += 1
            
    print(f"분류 완료: {moved_count}개의 파일을 각각의 악기 폴더로 이동시켰습니다.")

def find_best_sample(inst_name, inst_dir):
    files = [f for f in os.listdir(inst_dir) if os.path.isfile(os.path.join(inst_dir, f)) and f.endswith(".mp3")]
    if not files:
        return None
        
    # 1순위: 파일명에 'phrase'가 들어간 파일 (멜로디 재생이 많아 대표음으로 적절함)
    phrase_files = [f for f in files if "phrase" in f.lower()]
    if phrase_files:
        # 그 중 가장 용량이 큰 파일 선택 (일반적으로 긴 연주)
        phrase_files.sort(key=lambda x: os.path.getsize(os.path.join(inst_dir, x)), reverse=True)
        return phrase_files[0]
        
    # 2순위: 'very-long' 이 들어간 파일
    very_long_files = [f for f in files if "very-long" in f.lower() or "very_long" in f.lower()]
    if very_long_files:
        very_long_files.sort(key=lambda x: os.path.getsize(os.path.join(inst_dir, x)), reverse=True)
        return very_long_files[0]
        
    # 3순위: 파일 크기가 가장 큰 파일
    files.sort(key=lambda x: os.path.getsize(os.path.join(inst_dir, x)), reverse=True)
    return files[0]

def generate_database():
    print("\n2. 악기 목록 데이터베이스화 시작...")
    # all-samples 하위 폴더들을 탐색
    directories = [d for d in os.listdir(ALL_SAMPLES_DIR) if os.path.isdir(os.path.join(ALL_SAMPLES_DIR, d))]
    
    db_list = []
    
    for dir_name in sorted(directories):
        inst_dir = os.path.join(ALL_SAMPLES_DIR, dir_name)
        mapping_info = INSTRUMENT_MAPPING.get(dir_name)
        
        if not mapping_info:
            print(f"경고: {dir_name} 폴더에 대한 매핑 정보가 사전에 정의되지 않았습니다. 임의 분류합니다.")
            mapping_info = {"ko": dir_name, "category": "타악기"}
            
        best_sample = find_best_sample(dir_name, inst_dir)
        
        if not best_sample:
            print(f"경고: {dir_name} 폴더에 오디오 파일이 없어 데이터 목록에서 제외합니다.")
            continue
            
        # 상대 경로 계산 (웹에서 오디오를 호출할 경로 형식)
        # c:\Users\경남교육청\Desktop\악기 퍼즐킹을 루트로 봤을 때의 상대 경로
        relative_path = f"악기 음원/all-samples/{dir_name}/{best_sample}"
        
        db_list.append({
            "id": dir_name,
            "name": mapping_info["ko"],
            "category": mapping_info["category"],
            "sample_path": relative_path
        })
        
    # JS 파일로 생성
    js_content = f"// 악기 퍼즐킹 데이터베이스\nconst instrumentsDB = {json.dumps(db_list, ensure_ascii=False, indent=2)};\n"
    
    js_output_path = os.path.join(BASE_DIR, "instruments_data.js")
    with open(js_output_path, "w", encoding="utf-8") as f:
        f.write(js_content)
        
    print(f"데이터베이스 파일 생성 완료: {js_output_path} (총 {len(db_list)}개 악기 수록)")

if __name__ == "__main__":
    organize_files()
    generate_database()
