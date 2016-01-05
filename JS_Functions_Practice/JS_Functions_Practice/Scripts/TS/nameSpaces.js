'use strict';
//old way to do namespaces sans TS
(function () {
    function doSomething() {
        console.log('I was declared first!');
    }
    doSomething();
})();
(function () {
    function doSomething() {
        console.log('I was declared second!');
    }
    doSomething();
})();
//namespaces example
var FirstNamespace;
(function (FirstNamespace) {
    function doSomething() {
        console.log('I was declared first!');
    }
    FirstNamespace.doSomething = doSomething;
    doSomething();
})(FirstNamespace || (FirstNamespace = {}));
var SecondNamespace;
(function (SecondNamespace) {
    function doSomething() {
        console.log('I was declared second!');
    }
    SecondNamespace.doSomething = doSomething;
    doSomething();
})(SecondNamespace || (SecondNamespace = {}));
console.log(FirstNamespace.doSomething());
