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

namespace FirstNamespace {

    export function doSomething() {
        console.log('I was declared first!');
    }
    doSomething();
}

namespace SecondNamespace {

    export function doSomething() {
        console.log('I was declared second!');
    }
    doSomething();
}

console.log(FirstNamespace.doSomething());