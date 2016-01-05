'use strict';

//the fickleness of this

let counter = {
    _count: 0,
    toString: function () {
        return 'counter';
    },
    addCount: function () {
        this._count++;
        console.log(`this=${this} and _count=${this._count}`);
    }
};

let test = {
    _count: 5,
    toString: function () {
        return 'test';
    }
}

//counter.addCount(); // console logs 1
//counter.addCount(); // console logs 2
//counter.addCount(); // console logs 3
////window.setInterval(counter.addCount.bind(counter), 1000);

////really terrible example of a butchered thing

//function addNumbers() {
//    var first = arguments.forEach(function (item) {
//        var myArray = []

//        console.log(item);
//        XPathResult += item;
//    });
//}

//addNumbers(1, 2, 3, 4);