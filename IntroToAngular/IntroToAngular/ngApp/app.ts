namespace IntroToAngular {
    
    angular.module('IntroToAngular', ['ngRoute'])
        //the argument in .config has to be $routeProvider verbatim
        .config(function ($routeProvider) {
            $routeProvider
                //the code below denotes when we see / do stuff in object
                .when('/', {
                    template: 'Hello World!'
                })
                .when('/calculator', {
                    templateUrl: '/ngApp/views/calculator.html',
                    constroller: 'HomeController',
                    controllerAs: 'home'
                })
                .when('/contacts', {
                    templateUrl: '/ngApp/views/contactList.html',
                    controller: 'HomeController',
                    controllerAs: 'home'
                })
                .when('/details', {
                    templateUrl: '/ngApp/views/details.html',
                    controller: IntroToAngular.Controllers.DetailsController,
                    controllerAs: 'details'
                });
                
    });
}