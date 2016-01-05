////          0       1       2    - position in array
//let ray = ['cat', 'dog', 'bird'];
//obj = {
//    a: 'cat',
//    b: 'dog',
//};
//obj.a //read as obj dot a
//obj['a'] // read as object at a
//         //^both are the same
//obj.a === ray[0];
//obj['a'] === ray[0];
////how to iterate through an array
//for (let i = 0; i < ray.length; i++) {
//}
//ray[0] // read as ray at index spot 0
//ray[10] = 'fish';
//console.log(ray.length);
//console.log(Object.keys(obj));
//for (let i = 0; i < Object.keys(obj).length; i++) {
//    console.log(obj[Object.keys(obj)[i]]);
//}
//ray = ['apples', 'pears'];
//ray.push('oranges');
//ray[100] = 'bananas';
//ray.push('kiwi');
//console.log(ray);
//let fruits = ['apples', 'pears', 'oranges'];
//fruits.splice(1, 1);
//console.log(fruits);
//log(10);
//log('cat');
//function log(something: any): void {
//    console.log(something);
//};
////Vanilla JS : fruits.forEach(log);
////Ours       : ourForEach(fruits, log);
//ourForEach(fruits, log);
////our own explanation of what's going on behind the scenes in forEach()
//function ourForEach(theArray: Array<any>, theFunc: Function) {
//    for (let key in theArray) {
//        theFunc(theArray[key]);
//    }
//}
//let numbers = [];
//for (let i = 0; i < 1000; i++) {
//    numbers.push(i);
//}
////prints out all the prime numbers
//console.log(numbers.filter(function (num: number): boolean {
//    if (num <= 1) {
//        return false;
//    } 
//    for (let test = 2; test <= Math.sqrt(num) + 1; test++) {
//        if (num % test == 0) {
//            return false;
//        }
//    }
//    return true;
//})); 
//let names = ['cat', 'dog', 'bird', 'camel', 'aardvark'];
//console.log(names.filter(function (ele) {
//    return ele.indexOf('a') >= 0;
//}))
//console.log(names.map(function (ele) {
//    return ele.length;
//}));
//console.log(names.reduce(function (memo, ele) {
//    return memo + 1;
//}, 0));
//var cart = [
//    { name: 'Milk', price: 23.44 },
//    { name: 'Cheese', price: 3.50 },
//    { name: 'Peanuts', price: 8.00 },
//    { name: 'Wine', price: 7.50 }
//];
//console.log(cart.reduce(function (memo, ele) {
//    return memo + ele.price;
//}, 0));
