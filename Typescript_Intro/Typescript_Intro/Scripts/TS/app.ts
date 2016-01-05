'use strict';

let x : number = 12;
let y : number = 3;

let result: number = addNumbers(x, y);

function addNumbers(val1: number, val2: number): number {
    let oops = val1 + val2;
    //let oops = new Array();
    return oops;
}



enum Spices {
    Cayanne,
    Pepper,
    Tumeric,
}

let mySpice = Spices.Pepper

function returnNothing(): string {
    console.log('You called return nothing');
    return 'something';
}

returnNothing();

