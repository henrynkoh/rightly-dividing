import { Verse } from './bibleSearch';

// This is a sample dataset for demonstration
// In a production app, this would be stored in a database
export const kjvData: Verse[] = [
  // Kingdom Gospel Verses (based on Moses' Law, taught by Jesus to the 12 disciples)
  {
    reference: "Matthew 4:23",
    text_kjv: "And Jesus went about all Galilee, teaching in their synagogues, and preaching the gospel of the kingdom, and healing all manner of sickness and all manner of disease among the people.",
    text_korean: "예수께서 온 갈릴리를 두루 다니시며 그들의 회당에서 가르치시고 왕국의 복음을 전파하시며 백성 가운데 모든 병과 모든 질환을 고치시니",
    gospel_type: "kingdom"
  },
  {
    reference: "Matthew 9:35",
    text_kjv: "And Jesus went about all the cities and villages, teaching in their synagogues, and preaching the gospel of the kingdom, and healing every sickness and every disease among the people.",
    text_korean: "예수께서 모든 도시와 마을을 두루 다니시며 회당에서 가르치시고 왕국의 복음을 전파하시며 모든 병과 모든 질환을 고치시니",
    gospel_type: "kingdom"
  },
  {
    reference: "Matthew 10:5-6",
    text_kjv: "These twelve Jesus sent forth, and commanded them, saying, Go not into the way of the Gentiles, and into any city of the Samaritans enter ye not: But go rather to the lost sheep of the house of Israel.",
    text_korean: "예수께서 이 열둘을 보내시며 명하시되 이방인의 길로 가지 말고 사마리아인의 고을에도 들어가지 말며 오직 이스라엘 집의 잃은 양에게로 가라.",
    gospel_type: "kingdom"
  },
  {
    reference: "Mark 1:14-15",
    text_kjv: "Now after that John was put in prison, Jesus came into Galilee, preaching the gospel of the kingdom of God, And saying, The time is fulfilled, and the kingdom of God is at hand: repent ye, and believe the gospel.",
    text_korean: "요한이 감옥에 갇힌 후 예수께서 갈릴리에 오셔서 하나님의 왕국의 복음을 전파하시며 이르시되 때가 찼고 하나님의 왕국이 가까웠으니 너희는 회개하고 복음을 믿으라.",
    gospel_type: "kingdom"
  },
  {
    reference: "Luke 4:43",
    text_kjv: "And he said unto them, I must preach the kingdom of God to other cities also: for therefore am I sent.",
    text_korean: "그들에게 이르시되 내가 다른 도시에도 하나님의 왕국을 전파해야 하리니 이를 위해 내가 보내심을 받았노라.",
    gospel_type: "kingdom"
  },
  {
    reference: "Luke 8:1",
    text_kjv: "And it came to pass afterward, that he went throughout every city and village, preaching and shewing the glad tidings of the kingdom of God: and the twelve were with him,",
    text_korean: "그 후에 예수께서 각 도시와 마을을 두루 다니시며 하나님의 왕국의 기쁜 소식을 전파하시고 전하셨으며 열둘이 그와 함께 있더라.",
    gospel_type: "kingdom"
  },
  {
    reference: "Luke 16:16",
    text_kjv: "The law and the prophets were until John: since that time the kingdom of God is preached, and every man presseth into it.",
    text_korean: "율법과 선지자들은 요한까지였고 그때부터 하나님의 왕국이 전파되며 모든 사람이 그 안으로 들어가기 위해 애쓰느니라.",
    gospel_type: "kingdom"
  },
  {
    reference: "Acts 3:25-26",
    text_kjv: "Ye are the children of the prophets, and of the covenant which God made with our fathers, saying unto Abraham, And in thy seed shall all the kindreds of the earth be blessed. Unto you first God, having raised up his Son Jesus, sent him to bless you, in turning away every one of you from his iniquities.",
    text_korean: "너희는 선지자들의 자녀이며 하나님께서 우리 조상들과 맺으신 언약의 자녀이니 아브라함에게 이르시되 네 씨 안에서 땅의 모든 족속이 복을 받으리라 하셨느니라. 하나님께서 자기 아들 예수를 일으키사 먼저 너희에게 보내사 너희 각 사람을 그 죄악에서 돌이키게 하여 복을 주려 하셨느니라.",
    gospel_type: "kingdom"
  },
  {
    reference: "Matthew 24:14",
    text_kjv: "And this gospel of the kingdom shall be preached in all the world for a witness unto all nations; and then shall the end come.",
    text_korean: "이 왕국의 복음이 모든 민족에게 증거로 온 세상에 전파되리니 그제야 끝이 오리라.",
    gospel_type: "kingdom"
  },
  {
    reference: "Luke 9:2",
    text_kjv: "And he sent them to preach the kingdom of God, and to heal the sick.",
    text_korean: "그들을 보내사 하나님의 왕국을 전파하고 병든 자를 고치게 하시니",
    gospel_type: "kingdom"
  },
  {
    reference: "Matthew 5:17-19",
    text_kjv: "Think not that I am come to destroy the law, or the prophets: I am not come to destroy, but to fulfil. For verily I say unto you, Till heaven and earth pass, one jot or one tittle shall in no wise pass from the law, till all be fulfilled. Whosoever therefore shall break one of these least commandments, and shall teach men so, he shall be called the least in the kingdom of heaven: but whosoever shall do and teach them, the same shall be called great in the kingdom of heaven.",
    text_korean: "내가 율법이나 선지자들의 글을 폐하러 온 줄로 생각하지 말라. 폐하러 온 것이 아니요, 성취하러 왔노라. 진실로 내가 너희에게 이르노니, 하늘과 땅이 없어지기 전에는 율법의 일점 일획도 결코 없어지지 아니하고 다 이루리라. 그러므로 누구든지 이 계명들 중에서 지극히 작은 것 하나라도 어기고 또 그렇게 사람들을 가르치는 자는 천국에서 지극히 작은 자라 일컬음을 받을 것이요, 누구든지 그것들을 행하고 가르치는 자는 천국에서 큰 자라 일컬음을 받으리라.",
    gospel_type: "kingdom"
  },
  {
    reference: "Matthew 15:24",
    text_kjv: "But he answered and said, I am not sent but unto the lost sheep of the house of Israel.",
    text_korean: "그분께서 대답하여 이르시되, 나는 이스라엘의 집의 잃어버린 양들 외에는 다른 데로 보내어지지 아니하였노라, 하시니",
    gospel_type: "kingdom"
  },
  {
    reference: "John 1:31",
    text_kjv: "And I knew him not: but that he should be made manifest to Israel, therefore am I come baptizing with water.",
    text_korean: "내가 그분을 알지 못하였으나 그분께서 이스라엘에게 드러나야 하므로 내가 와서 물로 침례를 주노라, 하니라.",
    gospel_type: "kingdom"
  },
  {
    reference: "Acts 1:6",
    text_kjv: "When they therefore were come together, they asked of him, saying, Lord, wilt thou at this time restore again the kingdom to Israel?",
    text_korean: "그러므로 그들이 함께 모여 그분께 여쭈어 이르되, 주여, 주께서 이때에 그 왕국을 이스라엘에게 다시 회복시켜 주시겠나이까? 하니",
    gospel_type: "kingdom"
  },
  {
    reference: "Acts 2:38",
    text_kjv: "Then Peter said unto them, Repent, and be baptized every one of you in the name of Jesus Christ for the remission of sins, and ye shall receive the gift of the Holy Ghost.",
    text_korean: "이에 베드로가 그들에게 이르되, 회개하고 각각 예수 그리스도의 이름으로 침례를 받아 죄들의 사면을 얻으라. 그리하면 너희가 성령님을 선물로 받으리니",
    gospel_type: "kingdom"
  },

  // Grace Gospel Verses (based on Paul's epistles, received directly from Christ)
  {
    reference: "Galatians 2:7",
    text_kjv: "But contrariwise, when they saw that the gospel of the uncircumcision was committed unto me, as the gospel of the circumcision was unto Peter;",
    text_korean: "오히려 그들이 할례 없는 자의 복음이 내게 위임된 것 같이 할례 받은 자의 복음이 베드로에게 위임된 것을 보았느니라.",
    gospel_type: "grace"
  },
  {
    reference: "Acts 28:28",
    text_kjv: "Be it known therefore unto you, that the salvation of God is sent unto the Gentiles, and that they will hear it.",
    text_korean: "그런즉 너희가 알 것은 하나님의 이 구원이 이방인에게로 보내어진 바 되었으니 그들도 들으리라 하니라.",
    gospel_type: "grace"
  },
  {
    reference: "Acts 9:8",
    text_kjv: "And Saul arose from the earth; and when his eyes were opened, he saw no man: but they led him by the hand, and brought him into Damascus.",
    text_korean: "사울이 땅에서 일어나 눈을 떴으나 아무도 보지 못하매 그들이 손으로 그를 인도하여 다마스크로 들어가니라.",
    gospel_type: "grace"
  },
  {
    reference: "Romans 3:28",
    text_kjv: "Therefore we conclude that a man is justified by faith without the deeds of the law.",
    text_korean: "그러므로 우리가 결론하거니와 사람이 율법의 행위 없이 믿음으로 의롭다 하심을 받느니라.",
    gospel_type: "grace"
  },
  {
    reference: "Ephesians 2:8-9",
    text_kjv: "For by grace are ye saved through faith; and that not of yourselves: it is the gift of God: Not of works, lest any man should boast.",
    text_korean: "너희가 믿음으로 말미암아 은혜로 구원을 받았나니 이것은 너희에게서 난 것이 아니요 하나님의 선물이라. 행위에서 난 것이 아니니 이는 아무도 자랑하지 못하게 함이니라.",
    gospel_type: "grace"
  },
  {
    reference: "Romans 11:11",
    text_kjv: "I say then, Have they stumbled that they should fall? God forbid: but rather through their fall salvation is come unto the Gentiles, for to provoke them to jealousy.",
    text_korean: "그러므로 내가 말하노니 그들이 넘어지도록 실족하였느냐? 결코 그럴 수 없느니라. 오히려 그들의 넘어짐으로 구원이 이방인에게 이르러 그들을 질투하게 하려 하심이니라.",
    gospel_type: "grace"
  },
  {
    reference: "Galatians 1:11-12",
    text_kjv: "But I certify you, brethren, that the gospel which was preached of me is not after man. For I neither received it of man, neither was I taught it, but by the revelation of Jesus Christ.",
    text_korean: "형제들아, 내가 너희에게 알게 하노니 내가 전한 복음은 사람에게서 난 것이 아니니라. 내가 이것을 사람에게서 받지도 아니하였고 배우지도 아니하였으나 예수 그리스도의 계시로 받았느니라.",
    gospel_type: "grace"
  },
  {
    reference: "1 Corinthians 9:20-21",
    text_kjv: "And unto the Jews I became as a Jew, that I might gain the Jews; to them that are under the law, as under the law, that I might gain them that are under the law; To them that are without law, as without law, (being not without law to God, but under the law to Christ,) that I might gain them that are without law.",
    text_korean: "유대인들에게는 내가 유대인과 같이 되어 유대인들을 얻고자 하였으며 율법 아래 있는 자들에게는 율법 아래 있는 자와 같이 되어 율법 아래 있는 자들을 얻고자 하였으며 율법 없는 자들에게는 율법 없는 자와 같이 되었으나 (하나님께 율법 없는 자가 아니요 그리스도께 율법 아래 있느니라) 율법 없는 자들을 얻고자 하였노라.",
    gospel_type: "grace"
  },
  {
    reference: "Romans 1:16",
    text_kjv: "For I am not ashamed of the gospel of Christ: for it is the power of God unto salvation to every one that believeth; to the Jew first, and also to the Greek.",
    text_korean: "내가 그리스도의 복음을 부끄러워하지 아니하노니 이는 믿는 모든 자에게 구원을 주시는 하나님의 능력이 됨이라. 먼저는 유대인에게요 또한 헬라인에게니라.",
    gospel_type: "grace"
  },
  {
    reference: "Titus 2:11",
    text_kjv: "For the grace of God that bringeth salvation hath appeared to all men,",
    text_korean: "모든 사람에게 구원을 가져오는 하나님의 은혜가 나타났나니",
    gospel_type: "grace"
  },
  {
    reference: "Romans 6:14",
    text_kjv: "For sin shall not have dominion over you: for ye are not under the law, but under grace.",
    text_korean: "죄가 너희를 지배하지 못하리니 이는 너희가 율법 아래 있지 아니하고 은혜 아래 있기 때문이니라.",
    gospel_type: "grace"
  },
  {
    reference: "Ephesians 3:1-3",
    text_kjv: "For this cause I Paul, the prisoner of Jesus Christ for you Gentiles, If ye have heard of the dispensation of the grace of God which is given me to you-ward: How that by revelation he made known unto me the mystery;",
    text_korean: "이런 까닭에 나 바울은 너희 이방인들을 위해 예수 그리스도의 죄수가 되었노니, 과연 너희를 위해 내게 주신 하나님의 은혜의 경륜을 너희가 들었으면 내가 이 일을 위해 죄수가 된 것이라. 곧 계시로 하나님께서 내게 그 신비를 알게 하신 것이라.",
    gospel_type: "grace"
  },
  {
    reference: "Colossians 1:25-27",
    text_kjv: "Whereof I am made a minister, according to the dispensation of God which is given to me for you, to fulfil the word of God; Even the mystery which hath been hid from ages and from generations, but now is made manifest to his saints: To whom God would make known what is the riches of the glory of this mystery among the Gentiles; which is Christ in you, the hope of glory:",
    text_korean: "내가 너희를 위하여 하나님께서 내게 주신 경륜에 따라 하나님의 말씀을 이루려고 하나님의 교회의 사역자가 되었노라. 이 신비는 여러 시대와 세대에 감추어졌다가 이제 그분의 성도들에게 드러났으며, 하나님께서는 이방인들 가운데서 이 신비의 영광의 풍성함이 무엇인지 그들이 알기를 원하셨나니 이 신비는 곧 너희 안에 계신 그리스도, 곧 영광의 소망이니라.",
    gospel_type: "grace"
  },
  {
    reference: "Ephesians 3:6",
    text_kjv: "That the Gentiles should be fellowheirs, and of the same body, and partakers of his promise in Christ by the gospel:",
    text_korean: "이 신비는 이방인들이 복음으로 말미암아 그리스도 안에서 동일한 상속자가 되고 동일한 몸의 지체가 되며 그분의 약속에 동참하는 자가 된다는 것이라.",
    gospel_type: "grace"
  },
  {
    reference: "2 Timothy 1:9",
    text_kjv: "Who hath saved us, and called us with an holy calling, not according to our works, but according to his own purpose and grace, which was given us in Christ Jesus before the world began,",
    text_korean: "하나님께서 우리를 구원하시고 거룩한 부르심으로 부르신 것은 우리의 행위에 따른 것이 아니요, 자신의 목적과 은혜에 따른 것이라. 이 은혜는 세상이 시작되기 전에 그리스도 예수 안에서 우리에게 주신 것이나",
    gospel_type: "grace"
  },
  {
    reference: "Galatians 3:2",
    text_kjv: "This only would I learn of you, Received ye the Spirit by the works of the law, or by the hearing of faith?",
    text_korean: "내가 너희에게서 다만 이것을 알고자 하노니 너희가 율법의 행위로 성령을 받았느냐, 믿음을 들음으로 받았느냐?",
    gospel_type: "grace"
  }
];

// Search utility functions
export function searchVerses(query: string) {
  // Convert query to lowercase for case-insensitive search
  const normalizedQuery = query.toLowerCase().trim();
  
  // Find verses that match the query
  const matchingVerses = kjvData.filter(verse => 
    verse.text_kjv.toLowerCase().includes(normalizedQuery) ||
    verse.reference.toLowerCase().includes(normalizedQuery)
  );
  
  // Group by gospel type
  const kingdomVerses = matchingVerses.filter(v => v.gospel_type === "kingdom");
  const graceVerses = matchingVerses.filter(v => v.gospel_type === "grace");
  
  // Return search results
  return {
    query: normalizedQuery,
    total_verses: matchingVerses.length,
    kingdom_verses: kingdomVerses.length,
    grace_verses: graceVerses.length,
    kingdom_top_verses: kingdomVerses.slice(0, 10),
    grace_top_verses: graceVerses.slice(0, 10)
  };
} 