'use strict';

//How to use throw and catch


function addWholeNumbers(a: number, b: number) {
    try {
        if (a % 1 != 0 || b % 1 != 0) {
            throw new Error('You used a decimal! Try with a positive.');

        }
    }
         catch (ex) {
             console.log(ex.message);
        }
    try {
        if (a < 0 || b < 0) {
            throw new Error('You used a negative number! Try with a positive.');
        }
    }
    catch (ex) {
        console.info(ex.message);
    }
    }
     

addWholeNumbers(-1, 2);