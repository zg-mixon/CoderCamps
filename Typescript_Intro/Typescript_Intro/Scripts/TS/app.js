'use strict';
var x = 12;
var y = 3;
var result = addNumbers(x, y);
function addNumbers(val1, val2) {
    var oops = val1 + val2;
    //let oops = new Array();
    return oops;
}
var Spices;
(function (Spices) {
    Spices[Spices["Cayanne"] = 0] = "Cayanne";
    Spices[Spices["Pepper"] = 1] = "Pepper";
    Spices[Spices["Tumeric"] = 2] = "Tumeric";
})(Spices || (Spices = {}));
var mySpice = Spices.Pepper;
function returnNothing() {
    console.log('You called return nothing');
    return 'something';
}
returnNothing();
