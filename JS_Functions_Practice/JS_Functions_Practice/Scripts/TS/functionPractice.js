'use strict';
//variable set = to an anonymous function 
var addNumbers = function (val1, val2) {
    console.log(val1 + val2);
};
//addNumbers(4, 4);
//named function containing a default parameter value
function addStrings(val1, val2) {
    if (val2 === void 0) { val2 = 'dog'; }
    console.log(val1 + ' ' + val2);
}
//call not using default value
//addStrings('blue', 'cat');
//example of default parameter value at work
//addStrings('purple');
var person1 = {
    name: "bob",
    age: 34,
    report: function () {
        var _this = this;
        return function () {
            return "My name is " + _this.name;
        };
    }
};
//let myName = person.report();
//console.log(myName()); // writes "My name is bob"
//Class -> Objects
//Object
//let product = {
//    name: 'Peanut Butter',
//    price: 3.99
//};
//let product2 = {
//    name: 'Water',
//    price: 2.99
//}
//constructor function
function Product1(name, price) {
    this.name = name;
    this.price = price;
}
var product3 = new Product1('Jelly', 4.99);
//constructor function inside of a class
var Customer = (function () {
    function Customer(firstname, lastname) {
        this.firstName = firstname;
        this.lastName = lastname;
    }
    Customer.customerPrefix = 'Valued Customer';
    return Customer;
})();
var cust1 = new Customer('Nick', 'Galapagos');
console.log(cust1);
//javascript classes individual assignment
var Product = (function () {
    function Product(name, price, units, description) {
        if (description === void 0) { description = 'Product not described'; }
        this.name = name;
        this.price = price;
        this.unitsInStock = units;
        this.productDescrip = description;
        console.log("New product " + name + " has been created!");
    }
    return Product;
})();
//let product1 = new Product('Cat Food', 3.99, 46, 'Kibbles cat food!');
//let product2 = new Product('Dog Food', 4.50, 73);
//example of inheritance
