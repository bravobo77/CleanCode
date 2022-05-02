// BAD 더러운 코드 😣
// Hint❕ : 의미있는 이름을 사용해주세요.

const yyyymmdstr = moment().format("YYYY/MM/DD");

// GOOD 😎
// 위 코드를 깨끗하게 다시 작성해 주세요.

const generationTimestamp = moment().format("YYYY/MM/DD");


// 어떻게 고쳤는지, 사례에서 무엇을 배워야 하는지 설명해주세요.

// yyyymmdstr의 상수명은 발음하기도 어렵고, 의사소통할 때에도 문제가 될 수 있다. 그래서 보다 발음하기 쉽고, 날짜를 생성해주는 상수라는 것을 표현하기 위해 위와 같은 상수로 변경해주었다. 