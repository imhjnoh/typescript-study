class Vehi {
    constructor(public color: string) {}

    protected honk(): void {
        console.log('beep');
    }
}

const vehi = new Vehi('orange')

// error
vehi.honk()

// works well
console.log(vehi.color)


class Car extends Vehi {
    constructor(public wheels: number, color: string){
        super(color);
    }

    private drive(): void {
        console.log('vroom');
    }

    startDrivingProcess(): void {
        this.drive();
        this.honk();
    }
}

const car = new Car(4, 'red')

// error(drive is private)
car.drive();

// works well
car.startDrivingProcess();

