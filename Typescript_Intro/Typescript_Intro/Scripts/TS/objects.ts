'use strict';

let product: any = {
    name: 'laptop',
    price: 24.32,
    color: 'blue',

};


function calculateTax2() {
    return this.price * .08;
}

product.calculateTax = calculateTax2;

console.log(product.calculateTax());
