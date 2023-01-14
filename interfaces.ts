// 아래와 같이 하면 vehicle과 같은 타입을 받는 모든 곳에 새로 타입을 지정해주어야 한다.
// 인터페이스를 쓰면 해결된다.

// const oldCivic = {
//     name: 'civic',
//     year: 2000,
//     broken: true
// }

// const printVehicle = (vehicle: {name: string; year: number; broken: boolean}): void => {
//     console.log(`Name: ${vehicle.name}`)
//     console.log(`Year: ${vehicle.year}`);
//     console.log(`Broken: ${vehicle.broken}`);
// }

// printVehicle(oldCivic);

interface Vehicle {
    name: string;
    year: Date;
    broken: boolean;
    summary(): string;
}

interface Reportable {
    summary(): string;
}

const oldCivic = {
    name: 'civic',
    year: new Date(),
    broken: true,
    summary(): string {
        return `Name: ${this.name}`
    }
}

const drink = {
    color: 'brown',
    corbonated: true,
    sugar: 40,
    summary(): string {
    return `My drink has ${this.sugar} grams of sugar`
    }
}

// 내부적으로 타입스크립트가 루프를 돌며 타입이 맞게 들어왔는지 체크한다.
// const printVehicle = (vehicle: Vehicle): void => {
const printSummary = (item: Reportable): void => {
    // console.log(`Name: ${vehicle.name}`)
    // console.log(`Year: ${vehicle.year}`);
    // console.log(`Broken: ${vehicle.broken}`);
    // console.log(vehicle.summary());
    console.log(item.summary());
}

printSummary(oldCivic);
printSummary(drink);
