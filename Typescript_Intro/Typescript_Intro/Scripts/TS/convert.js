'use strict';
//let input= prompt('Hello! Please put in your favorite number!');
//if (!input || isNaN(+input)) {
//    alert("You have entered something that is not a number!");
//}
//else {
//    let result = +input * 100;
//    alert(result);
//}
//let product: any = {
//    price: 23.44
//};
//product = null;
//let price = product.price;
//console.log(price);
//saySomething('Hello!');
//saySomething();
//function saySomething(message?) {
//    message = message || 'something!';
//    console.log(message);
//}
function calculateTax(price, taxRate) {
    if (!taxRate && taxRate != 0) {
        taxRate = 0.08;
    }
    return price + (price * taxRate);
}
;
console.assert(calculateTax(20) === 21.6);
console.assert(calculateTax(20, .05) === 21);
console.assert(calculateTax(20, 0) === 20);
