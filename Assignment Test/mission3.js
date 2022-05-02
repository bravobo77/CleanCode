// BAD 더러운 코드 😣
// Hint❕ : 불필요하게 반복하지 마세요.

const Car = {
  carMake: "Honda",
  carModel: "Accord",
  carColor: "Blue"
};

function paintCar(car, color) {
  car.carColor = color;
}

// GOOD 😎
// 위 코드를 깨끗하게 다시 작성해 주세요.


const DescribeAboutCar = {
  brand: "Honda",
  model: "Accord",
  color: "Blue"
};

function paintCar(describeAboutCar, color) {
  describeAboutCar.color = color;
}

// 어떻게 고쳤는지, 사례에서 무엇을 배워야 하는지 설명해주세요.

// 불필요한 맥락을 없애야한다. 상수가 car에 대한 것이라고 속성까지 car로 시작하는 것은 나중에 이 상수에 찾을때 효율적이지 못하다. 짧더라도 긴 이름으로 정의하는 것이 검색을 할 때 유용하고, 보다 서술적인 이름을 붙이는 것이 개발자가 이해하기에도 쉽다. 






