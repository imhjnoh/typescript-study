// const add = (a, b) => a와 b 모두 any타입
const add = (a: number, b: number): number => {
  // 리턴 타입에 어노테이션을 붙이지 않아도 타입 추론이 가능하지만,
  // 리턴을 하지 않는 등의 상황에서도 void로 추론해버려서 항상 붙여주는 것이 좋다.
  return a + b;
};

// (a:number, b:number) => void
const subtract = (a: number, b: number) => {
  a - b;
};

function divide(a: number, b: number): number {
  return a / b;
}

const multiply = function (a: number, b: number): number {
  return a * b;
};

const logger = (message: string): void => {
  console.log(message);
  return undefined;
  // 나머지 리턴은 다 에러
  // null도 안된다. Type 'null' is not assignable to type 'void'.
};

const throwError = (message: string): never => {
  throw new Error(message);
};

const todaysWeather = {
  date: new Date(),
  weather: "sunny",
};

// es2015
const logWeather = ({
  date,
  weather,
}: {
  date: Date;
  weather: string;
}): void => {
  console.log(date);
  console.log(weather);
};

logWeather(todaysWeather);
