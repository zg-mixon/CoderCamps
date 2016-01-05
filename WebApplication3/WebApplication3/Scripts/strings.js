//'use strict';
////                    1         2      3        4 
////       0123456789012345678901234567890123456789012
//let a = 'the quick brown fox jumps over the lazy dog';
//console.log(a.indexOf('o', 13));
//let oIdx = a.indexOf('o');
//let count = 0;
//while (oIdx >= 0) {
//    count++;
//    oIdx = a.indexOf('o', oIdx + 1);
//}
//console.log(count);
//console.log(a.replace('fox', 'cat'));
//console.log(a.slice(5, 15));
//console.log(a.substr(5, 15));
//console.log(a.substring(5, 15));
//console.log(a.split(' ').length);
//console.log(`1 + 1 = ${1 + 1}`);
//let regex = /\w+/g;
//console.log(a.replace(regex, 'banana'));
//console.log(new Date);
////
//let add = function (v1, v2) {
//    return v1 + v2;
//};
//add = function () { }
//function addNumbers(val1, val2): number {
//    return ' ';
//}
var customer = {
    _firstName: ' ',
    _lastName: ' ',
    set name(value) {
        if (!value) {
            throw new Error('You can not enter a value that is not a name!');
        }
        this._firstName = value;
    },
    set name1(value) {
        if (!value) {
            throw new Error('You can not enter a value that is not a name!');
        }
        this._lastName = value;
    },
    get name() {
        return this._firstName + ' ' + this._lastName;
    }
};
customer.name = 'Zach';
customer.name1 = 'Mixon';
console.log(customer.name);
