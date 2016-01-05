'use strict';

//interface IPersonObj {
//    name: string;
//}

//function printName(personObj: IPersonObj) {
//    console.log(personObj.name);
//}

//let person = {
//    name: 'Zarlap',
//}

//printName(person.name);

interface IVehicle {
    make: string;
    model: string;
    year: number;
}

class Car implements IVehicle {
    make: string;
    model: string;
    year: number;
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
}


class Truck implements IVehicle {
    make: string;
    model: string;
    year: number;
    offRoad: boolean;
    constructor(make, model, year, offRoad?) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.offRoad = offRoad;
    }
}

let myTruck = new Truck('Dodge', 'Ram', 2015)
let myCar = new Car('Honda', 'CRV', 2010);
let vehicles: IVehicle[] = [myCar, myTruck];

let first = vehicles[0];
let second = vehicles[1];

