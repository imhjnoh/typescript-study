const carMakers = ["ford", "toyota", "chevy"];
const dates = [new Date(), new Date()];

const carsByMake: string[][] = [["f150"], ["corolla"], ["camaro"]];

// TS can do type inference when extracting values from an array
const Acar = carMakers[0];
const myCar = carMakers.pop();

// Prevent incompatible values
carMakers.push(100);

// Help with 'map'
carMakers.map((car: string): string => {
  return car.toUpperCase();
});

// Flexible types
const importantDates: (Date | string)[] = [new Date(), "2030-10-10"];
importantDates.push("2030-12-12");
importantDates.push(new Date());
