const drink = {
  color: "brown",
  carbodated: true,
  sugar: 40,
};

type Drink = [string, boolean, number];
// makes an array into a tuple
const pepsi: Drink = ["brown", true, 40];
const sprite: Drink = ["clear", true, 40];
const tea: Drink = ["brown", false, 0];

// throws an error
pepsi[0] = 30;

const carSpecs: [number, number] = [400, 3354]

// carSpecs 튜플과는 달리 각 필드가 무엇을 의미하는지 알기 쉽다.
// 그래서 오브젝트로 된 코드를 많이 사용하게 될 것이다.
const carStats = {
  horsepower: 400,
  weight: 3354
}