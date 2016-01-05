'use strict';


//a class to be called later
class httpCall {
    getData(url: string) {
        console.log('Order of Execution: 2 - initiate a GET call');
        let promise = new Promise(function (resolve, reject) {
            let request = new XMLHttpRequest();
            request.open('GET', url);
            request.addEventListener('load', function () {
                console.log('Order of Execution: 4 - Data comes back');
                resolve(JSON.parse(request.responseText));
            });
            request.send();
        });
        return promise;
    }
}

console.log('Order of Execution: 1 - Create a new httpCall Object');
var $http = new httpCall();
function success(data) {
    console.log('Order of Execution: 5 - Fulfills the promise by returning');
    console.log(data);
}
let promise = $http.getData('http://api.openweathermap.org/data/2.5/weather?API=&APPID=d43debb0b9a3919fef3f0f689e82583e&q=Seattle')

promise.then(success);
        
    
console.log('Order of Execution: 3 - Continues to run code logically');
//other code logic goes here