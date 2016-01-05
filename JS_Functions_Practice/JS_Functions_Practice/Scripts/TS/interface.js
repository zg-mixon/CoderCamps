'use strict';
var Car = (function () {
    function Car(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    return Car;
})();
var Truck = (function () {
    function Truck(make, model, year, offRoad) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.offRoad = offRoad;
    }
    return Truck;
})();
var myTruck = new Truck('Dodge', 'Ram', 2015);
var myCar = new Car('Honda', 'CRV', 2010);
var vehicles = [myCar, myTruck];
var first = vehicles[0];
var second = vehicles[1];
