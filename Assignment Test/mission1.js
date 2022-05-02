// BAD 더러운 코드 😣
// Hint❕ : 검색하기 쉬운 이름을 사용하세요.
// blastOFF는 로켓 발사를 의미. 86400000은 하루의 밀리초 (milliseconds) 의미. 

// What the heck is 86400000 for?
setTimeout(blastOff, 86400000);

// GOOD 😎
// 위 코드를 깨끗하게 다시 작성해 주세요.

// 1) 첫번째 냈던 답안
setTimeout(forRocketBlastOff, 86400000);
// 2) 고친 답안
const MILLISECONDS_PER_DAY = 60 * 60 * 24 * 1000;
setTimeout(blastOff, MILLISECONDS_PER_DAY);

// 어떻게 고쳤는지, 사례에서 무엇을 배워야 하는지 설명해주세요.

// 무엇을 위한 시간인지 안나와있었던 것이 문제라고 생각해서
// 첫번째 인수를 보다 명확하게 변경하였다. 

// 고친 답안에 대한 해설
// Declare them as capitalized named constants.