// Instrument Database
const instrumentsDB = [
    {
        "id":  "banjo",
        "name":  "밴조",
        "category":  "현악기",
        "sample_path":  "sound/banjo.mp3",
        "image_path":  "img/banjo.webp",
        "description":  "둥근 울림통에 가죽을 씌운 현악기로, 미국 민속음악인 컨트리와 블루그래스 등에서 경쾌하고 탁탁 튕기는 독특한 음색을 냅니다."
    },
    {
        "id":  "bass drum",
        "name":  "베이스 드럼(큰북)",
        "category":  "타악기",
        "sample_path":  "sound/bass drum.mp3",
        "image_path":  "img/bass drum.webp",
        "description":  "가장 큰 북으로 말렛으로 쳐서 웅장하고 깊은 저음의 비트를 만들어내며, 모든 밴드와 오케스트라의 심장박동 역할을 합니다."
    },
    {
        "id":  "bassoon",
        "name":  "바순",
        "category":  "관악기",
        "sample_path":  "sound/bassoon.mp3",
        "image_path":  "img/bassoon.webp",
        "description":  "더블 리드를 사용하는 저음역대 목관악기로, 낮고 웅장하면서도 유머러스하고 부드러운 음색을 동시에 가지고 있습니다."
    },
    {
        "id":  "castanets",
        "name":  "캐스터네츠",
        "category":  "타악기",
        "sample_path":  "sound/castanets.mp3",
        "image_path":  "img/castanets.webp",
        "description":  "조개껍데기 모양의 두 조각의 나무판을 서로 부딪쳐 소리를 내는 타악기로, 플라멩코 등 스페인 무용에 널리 쓰여 딱딱거리는 리듬을 냅니다."
    },
    {
        "id":  "cello",
        "name":  "첼로",
        "category":  "현악기",
        "sample_path":  "sound/cello.mp3",
        "image_path":  "img/cello.webp",
        "description":  "바이올린 족 악기 중 저음을 담당하며, 인간의 목소리와 가장 닮아 있어 깊고 중후하며 감성적인 선율을 연주합니다."
    },
    {
        "id":  "clarinet",
        "name":  "클라리넷",
        "category":  "관악기",
        "sample_path":  "sound/clarinet.mp3",
        "image_path":  "img/clarinet.webp",
        "description":  "홑리드를 사용하는 목관악기로, 부드러운 저음부터 날카롭고 화려한 고음까지 매우 넓은 음역과 풍부한 표현력을 가집니다."
    },
    {
        "id":  "cowbell",
        "name":  "카우벨",
        "category":  "타악기",
        "sample_path":  "sound/cowbell.mp3",
        "image_path":  "img/cowbell.webp",
        "description":  "가축의 목에 달던 종에서 유래한 타악기로, 단단하고 깡깡거리는 둔탁한 금속성 울림을 내며 라틴 리듬에 필수적입니다."
    },
    {
        "id":  "djembe",
        "name":  "젬베",
        "category":  "타악기",
        "sample_path":  "sound/djembe.mp3",
        "image_path":  "img/djembe.webp",
        "description":  "서아프리카의 대표적인 잔 모양 외가죽 북으로, 손바닥과 손가락으로 치는 위치에 따라 묵직한 베이스부터 맑은 고음까지 냅니다."
    },
    {
        "id":  "double-bass",
        "name":  "더블베이스",
        "category":  "현악기",
        "sample_path":  "sound/double-bass.mp3",
        "image_path":  "img/double-bass.webp",
        "description":  "현악기 중 크기가 가장 크고 음역이 가장 낮은 악기로, 재즈와 클래식에서 리듬과 화성의 묵직한 뼈대를 이룹니다."
    },
    {
        "id":  "flute",
        "name":  "플루트",
        "category":  "관악기",
        "sample_path":  "sound/flute.mp3",
        "image_path":  "img/flute.webp",
        "description":  "공기를 불어넣어 소리를 내는 옆으로 부는 목관악기로, 맑고 투명하며 화려한 새소리와 같은 고음 연주에 강합니다."
    },
    {
        "id":  "guiro",
        "name":  "귀로",
        "category":  "타악기",
        "sample_path":  "sound/guiro.mp3",
        "image_path":  "img/guiro.webp",
        "description":  "빨래판처럼 홈이 파인 나무나 플라스틱 통 표면을 긁개로 긁어 소리를 내는 라틴 타악기로, 드르륵거리는 경쾌한 소리를 표현합니다."
    },
    {
        "id":  "guitar",
        "name":  "기타",
        "category":  "현악기",
        "sample_path":  "sound/guitar.mp3",
        "image_path":  "img/guitar.webp",
        "description":  "여섯 개의 줄을 손가락이나 피크로 튕겨 소리를 내는 대중적인 현악기로, 반주와 독주 등 다방면에서 널리 쓰입니다."
    },
    {
        "id":  "mandolin",
        "name":  "만돌린",
        "category":  "현악기",
        "sample_path":  "sound/mandolin.mp3",
        "image_path":  "img/mandolin.webp",
        "description":  "이탈리아의 민속 현악기로, 복현(두 줄씩 짝을 지음) 구조를 가져 트레몰로 주법을 통해 떨리는 듯한 청아한 소리를 냅니다."
    },
    {
        "id":  "oboe",
        "name":  "오보에",
        "category":  "관악기",
        "sample_path":  "sound/oboe.mp3",
        "image_path":  "img/oboe.webp",
        "description":  "두 장의 리드를 겹쳐 소리를 내는 목관악기로, 콧소리가 섞인 듯한 독특하고 애절하며 관통력 있는 음색을 지녔습니다."
    },
    {
        "id":  "saxophone",
        "name":  "색소폰",
        "category":  "관악기",
        "sample_path":  "sound/saxophone.mp3",
        "image_path":  "img/saxophone.webp",
        "description":  "금속 재질의 몸체에 클라리넷과 같은 마우스피스를 사용하는 악기로, 클래식부터 재즈까지 감미롭고 역동적인 소리를 냅니다."
    },
    {
        "id":  "snare drum",
        "name":  "스네어 드럼(작은북)",
        "category":  "타악기",
        "sample_path":  "sound/snare drum.mp3",
        "image_path":  "img/snare drum.webp",
        "description":  "아랫면에 금속 선(스네어)을 밀착시켜 연주하는 북으로, 스틱으로 칠 때 특유의 채르륵거리는 카랑카랑하고 날카로운 비트를 냅니다."
    },
    {
        "id":  "tambourine",
        "name":  "탬버린",
        "category":  "타악기",
        "sample_path":  "sound/tambourine.mp3",
        "image_path":  "img/tambourine.webp",
        "description":  "둥근 목제 테두리에 작은 금속 징(심벌)들을 박아 흔들거나 쳐서 소리를 내며, 짤랑거리는 소리와 가죽 타격음을 동시에 냅니다."
    },
    {
        "id":  "triangle",
        "name":  "트라이앵글",
        "category":  "타악기",
        "sample_path":  "sound/triangle.mp3",
        "image_path":  "img/triangle.webp",
        "description":  "쇠막대를 삼각형으로 구부려 만든 타악기로, 쇠매로 가볍게 칠 때 쨍하고 맑으며 은반 위에 물방울이 구르는 듯한 투명한 소리를 냅니다."
    },
    {
        "id":  "trombone",
        "name":  "트롬본",
        "category":  "관악기",
        "sample_path":  "sound/trombone.mp3",
        "image_path":  "img/trombone.webp",
        "description":  "슬라이드를 밀고 당겨 음높이를 조절하는 금관악기로, 장엄하고 남성적이며 곧게 뻗어 나가는 강력한 소리가 특징입니다."
    },
    {
        "id":  "trumpet",
        "name":  "트럼펫",
        "category":  "관악기",
        "sample_path":  "sound/trumpet.mp3",
        "image_path":  "img/trumpet.webp",
        "description":  "가장 오래된 금관악기 중 하나로, 세 개의 밸브를 누르며 연주하고 화려하며 찌르는 듯한 날카롭고 당찬 고음을 냅니다."
    },
    {
        "id":  "tuba",
        "name":  "튜바",
        "category":  "관악기",
        "sample_path":  "sound/tuba.mp3",
        "image_path":  "img/tuba.webp",
        "description":  "금관악기 중 가장 크고 가장 낮은 음역을 담당하며, 오케스트라나 군악대에서 웅장하고 묵직한 저음의 기초를 제공합니다."
    },
    {
        "id":  "viola",
        "name":  "비올라",
        "category":  "현악기",
        "sample_path":  "sound/viola.mp3",
        "image_path":  "img/viola.webp",
        "description":  "바이올린보다 약간 더 크고 낮으며, 바이올린의 화려함과 첼로의 중후함 사이에 위치한 따뜻하고 수수한 음색을 냅니다."
    },
    {
        "id":  "violin",
        "name":  "바이올린",
        "category":  "현악기",
        "sample_path":  "sound/violin.mp3",
        "image_path":  "img/violin.webp",
        "description":  "현악기 군의 대표 악기로, 활로 현을 마찰시켜 소리를 내며 화려한 기교와 민감하고 다채로운 감정 표현력이 최고인 악기입니다."
    },
    {
        "id":  "wind chimes",
        "name":  "윈드 차임",
        "category":  "타악기",
        "sample_path":  "sound/wind chimes.mp3",
        "image_path":  "img/wind chimes.webp",
        "description":  "바람이나 손끝에 스칠 때 여러 금속 막대들이 서로 부딪치며 찰랑거리는 소리를 내는 악기로, 신비롭고 몽환적인 음색의 흐름을 만듭니다."
    },
    {
        "id":  "woodblock",
        "name":  "우드블록",
        "category":  "타악기",
        "sample_path":  "sound/woodblock.mp3",
        "image_path":  "img/woodblock.webp",
        "description":  "속이 빈 나무 블록을 나무 채로 쳐서 딱딱거리는 경쾌하고 맑은 소리를 내는 타악기입니다."
    },
    {
        "id": "gayageum",
        "name": "가야금",
        "category": "국악기",
        "sample_path": "sound/가야금.mp3",
        "image_path": "img/gayageum.jpg",
        "description": "오동나무 울림통에 12개의 명주실 줄을 얹어 손가락으로 뜯거나 퉁겨 소리를 내는 대표적인 한국 전통 현악기입니다."
    },
    {
        "id": "geomungo",
        "name": "거문고",
        "category": "국악기",
        "sample_path": "sound/거문고.mp3",
        "image_path": "img/geomungo.jpg",
        "description": "6개의 줄과 괘를 가지고 있으며 대나무 술대로 줄을 쳐서 묵직하고 장중한 선율을 연주하는 '백악지왕' 현악기입니다."
    },
    {
        "id": "kkwaenggwari",
        "name": "꽹과리",
        "category": "국악기",
        "sample_path": "sound/꽹가리.mp3",
        "image_path": "img/kkwaenggwari.jpg",
        "description": "놋쇠로 만든 작고 맑으며 강렬하고 쨍쨍한 소리를 내는 타악기로, 풍물놀이와 사물놀이에서 리더 역할을 맡습니다."
    },
    {
        "id": "danso",
        "name": "단소",
        "category": "국악기",
        "sample_path": "sound/단소.mp3",
        "image_path": "img/danso.jpg",
        "description": "세로로 불어서 소리를 내는 작고 아담한 대나무 관악기로, 맑고 청아한 음색이 특징입니다."
    },
    {
        "id": "sogeum",
        "name": "소금",
        "category": "국악기",
        "sample_path": "sound/소금.mp3",
        "image_path": "img/sogeum.jpg",
        "description": "가로로 불어서 연주하는 높은 음역대의 대나무 관악기로, 투명하고 드높은 새소리와 같은 화려한 가락을 냅니다."
    },
    {
        "id": "janggu",
        "name": "장구",
        "category": "국악기",
        "sample_path": "sound/장구.mp3",
        "image_path": "img/janggu.jpg",
        "description": "모래시계 모양의 통 양쪽에 가죽을 메운 대표적인 민속 타악기로, 궁채와 열채로 다채로운 장단을 만들어냅니다."
    },
    {
        "id": "jing",
        "name": "징",
        "category": "국악기",
        "sample_path": "sound/징.mp3",
        "image_path": "img/jing.jpg",
        "description": "놋쇠로 만든 커다란 쇠북으로, 헝겊을 감은 채로 쳐서 은은하고 웅장하게 번지는 여운을 만들어냅니다."
    },
    {
        "id": "taepyeongso",
        "name": "태평소",
        "category": "국악기",
        "sample_path": "sound/태평소.mp3",
        "image_path": "img/taepyeongso.jpg",
        "description": "나팔 모양의 금속 동구와 대나무 관으로 이루어진 관악기로, 매우 크고 날카로우며 화려한 소리를 냅니다."
    },
    {
        "id": "pyeongyeong",
        "name": "편경",
        "category": "국악기",
        "sample_path": "sound/편경.mp3",
        "image_path": "img/pyeongyeong.jpg",
        "description": "ㄱ자 모양으로 깎은 16개의 돌(경석)을 틀에 걸어놓고 뿔망치로 쳐서 청아하고 정돈된 소리를 내는 궁중 아악 타악기입니다."
    },
    {
        "id": "pyeonjong",
        "name": "편종",
        "category": "국악기",
        "sample_path": "sound/편종.mp3",
        "image_path": "img/pyeonjong.jpg",
        "description": "두께가 서로 다른 16개의 청동 종을 2단 틀에 걸어두고 망치로 쳐서 웅장하고 깊은 음률을 전하는 궁중 타악기입니다."
    },
    {
        "id": "haegeum",
        "name": "해금",
        "category": "국악기",
        "sample_path": "sound/해금.mp3",
        "image_path": "img/haegeum.jpg",
        "description": "두 개의 줄 사이에 활을 넣고 문질러 소리를 내는 현악기로, 사람의 목소리처럼 다양하고 애절한 느낌을 잘 표현합니다."
    },
    {
        "id": "hyangpiri",
        "name": "향피리",
        "category": "국악기",
        "sample_path": "sound/향피리.mp3",
        "image_path": "img/hyangpiri.jpg",
        "description": "대나무 관에 겹리드를 꽂아 부는 대표적인 관악기로, 주선율을 이끄는 힘차고 풍부하며 따뜻한 음색을 지녔습니다."
    }
];

