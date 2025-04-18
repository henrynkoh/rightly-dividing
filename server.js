const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const port = process.env.PORT || 3000;

// JSON 파싱 미들웨어 추가
app.use(express.json());

// 정적 파일 제공
app.use(express.static('public'));

// kjv.json 파일 확인 및 로드 함수
function loadKjvData() {
  const possiblePaths = [
    path.join(__dirname, 'kjv.json'),
    path.join(__dirname, 'public', 'kjv.json'),
    path.join(__dirname, 'data', 'kjv.json')
  ];
  
  for (const filePath of possiblePaths) {
    try {
      if (fs.existsSync(filePath)) {
        console.log(`KJV 데이터 파일을 찾았습니다: ${filePath}`);
        return JSON.parse(fs.readFileSync(filePath, 'utf8'));
      }
    } catch (err) {
      console.log(`${filePath}에서 파일을 로드하는 중 오류 발생:`, err);
    }
  }
  
  console.log('KJV 데이터 파일을 찾을 수 없습니다. 샘플 데이터를 사용합니다.');
  return null;
}

// 샘플 데이터 설정
const sampleBibleData = {
  verses: [
    {
      reference: "Matthew 4:23",
      text: "And Jesus went about all Galilee, teaching in their synagogues, and preaching the gospel of the kingdom, and healing all manner of sickness and all manner of disease among the people.",
      koreanText: "예수께서 온 갈릴리에 두루 다니시며 그들의 회당에서 가르치시고 왕국의 복음을 선포하시며 백성 가운데서 모든 질병과 모든 연약함을 고치시니",
      category: "kingdom"
    },
    {
      reference: "Matthew 9:35",
      text: "And Jesus went about all the cities and villages, teaching in their synagogues, and preaching the gospel of the kingdom, and healing every sickness and every disease among the people.",
      koreanText: "예수께서 모든 도시와 마을을 두루 다니사 그들의 회당에서 가르치시고 왕국의 복음을 선포하시며 백성 가운데서 모든 질병과 모든 연약함을 고치시니라.",
      category: "kingdom"
    },
    {
      reference: "Matthew 10:5-6",
      text: "These twelve Jesus sent forth, and commanded them, saying, Go not into the way of the Gentiles, and into any city of the Samaritans enter ye not: But go rather to the lost sheep of the house of Israel.",
      koreanText: "예수께서 이 열둘을 보내시며 명하시되 이방인의 길로 가지 말고 사마리아인의 고을에도 들어가지 말며 오직 이스라엘 집의 잃은 양에게로 가라.",
      category: "kingdom"
    },
    {
      reference: "Matthew 15:24",
      text: "But he answered and said, I am not sent but unto the lost sheep of the house of Israel.",
      koreanText: "예수께서 대답하여 이르시되 나는 이스라엘 집의 잃어버린 양들 외에는 다른 데로 보내어지지 아니하였노라 하시니라.",
      category: "kingdom"
    },
    {
      reference: "Matthew 24:14",
      text: "And this gospel of the kingdom shall be preached in all the world for a witness unto all nations; and then shall the end come.",
      koreanText: "또 이 왕국의 복음이 모든 민족들에게 증거가 되기 위해 온 세상에 선포되리니 그제야 끝이 오리라.",
      category: "kingdom"
    },
    {
      reference: "Acts 1:6",
      text: "When they therefore were come together, they asked of him, saying, Lord, wilt thou at this time restore again the kingdom to Israel?",
      koreanText: "그러므로 그들이 함께 모였을 때에 그분께 여쭈어 이르되, 주여, 주께서 이때에 그 왕국을 이스라엘에게 다시 회복시켜 주시겠나이까? 하니",
      category: "kingdom"
    },
    {
      reference: "Galatians 2:7",
      text: "But contrariwise, when they saw that the gospel of the uncircumcision was committed unto me, as the gospel of the circumcision was unto Peter;",
      koreanText: "오히려 그들이 할례 없는 자의 복음이 내게 위임된 것 같이 할례 받은 자의 복음이 베드로에게 위임된 것을 보았느니라.",
      category: "grace"
    },
    {
      reference: "Romans 3:24",
      text: "Being justified freely by his grace through the redemption that is in Christ Jesus:",
      koreanText: "그리스도 예수님 안에 있는 구속을 통해 하나님의 은혜로 값없이 의롭게 되었느니라.",
      category: "grace"
    },
    {
      reference: "Ephesians 2:8-9",
      text: "For by grace are ye saved through faith; and that not of yourselves: it is the gift of God: Not of works, lest any man should boast.",
      koreanText: "너희가 믿음을 통해 은혜로 구원을 받았으니 이것은 너희 자신에게서 난 것이 아니요 하나님의 선물이니라. 행위에서 난 것이 아니니 이것은 아무도 자랑하지 못하게 하려 함이라.",
      category: "grace"
    },
    {
      reference: "Romans 6:14",
      text: "For sin shall not have dominion over you: for ye are not under the law, but under grace.",
      koreanText: "너희가 율법 아래 있지 아니하고 은혜 아래 있으므로 죄가 너희를 지배하지 못하리라.",
      category: "grace"
    },
    {
      reference: "2 Timothy 2:15",
      text: "Study to shew thyself approved unto God, a workman that needeth not to be ashamed, rightly dividing the word of truth.",
      koreanText: "너는 진리의 말씀을 바르게 나누어 네 자신을 하나님께 인정받은 자로, 부끄러울 것이 없는 일꾼으로 나타내도록 연구하라.",
      category: "grace"
    }
  ]
};

// KJV 데이터 로드
let kjvData = loadKjvData() || sampleBibleData;

// 구절 내 검색어 등장 횟수 카운트 함수
const countOccurrences = (text, searchTerm) => {
  if (!text || !searchTerm) return 0;
  const regex = new RegExp(searchTerm, 'gi');
  return (text.match(regex) || []).length;
};

// 기본 라우트
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// API 검색 엔드포인트
app.post('/api/search', (req, res) => {
  try {
    const { query } = req.body;
    
    if (!query) {
      return res.status(400).json({ error: 'Query parameter is required' });
    }
    
    console.log('Search query received:', query);
    
    // 검색어가 구절 내에 포함되는지 확인 (대소문자 구분 없이)
    const matchedVerses = kjvData.verses.filter(verse => 
      verse.text.toLowerCase().includes(query.toLowerCase()) ||
      verse.reference.toLowerCase().includes(query.toLowerCase())
    );
    
    console.log('Matched verses:', matchedVerses.length);
    
    // 각 구절에 검색어 등장 횟수 추가
    const enhancedResults = matchedVerses.map(verse => ({
      ...verse,
      occurrences: countOccurrences(verse.text, query)
    }));
    
    // 카테고리별로 구분
    const kingdomVerses = enhancedResults.filter(verse => verse.category === 'kingdom');
    const graceVerses = enhancedResults.filter(verse => verse.category === 'grace');
    
    // 총 등장 횟수 계산
    const totalOccurrences = enhancedResults.reduce((sum, verse) => sum + verse.occurrences, 0);
    
    const result = {
      query,
      totalVerses: matchedVerses.length,
      totalOccurrences,
      kingdomGospel: kingdomVerses,
      graceGospel: graceVerses
    };
    
    console.log('Sending response:', JSON.stringify(result).slice(0, 100) + '...');
    
    res.json(result);
  } catch (error) {
    console.error('Error searching verses:', error);
    res.status(500).json({ error: 'Failed to process search request' });
  }
});

// KJV 데이터 업로드 엔드포인트
app.post('/api/upload-kjv', (req, res) => {
  try {
    const { data } = req.body;
    
    if (!data || !data.verses || !Array.isArray(data.verses)) {
      return res.status(400).json({ error: 'Invalid KJV data format' });
    }
    
    kjvData = data;
    
    // 데이터를 파일로 저장 (선택 사항)
    try {
      fs.writeFileSync(path.join(__dirname, 'data', 'kjv.json'), JSON.stringify(data, null, 2));
      console.log('KJV 데이터가 성공적으로 저장되었습니다.');
    } catch (err) {
      console.error('KJV 데이터 저장 중 오류:', err);
    }
    
    res.json({ 
      success: true, 
      message: 'KJV data uploaded successfully',
      verseCount: data.verses.length
    });
  } catch (error) {
    console.error('Error uploading KJV data:', error);
    res.status(500).json({ error: 'Failed to process upload request' });
  }
});

// 서버 시작
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
  console.log(`KJV 데이터에 ${kjvData.verses.length}개의 구절이 로드되었습니다.`);
}); 