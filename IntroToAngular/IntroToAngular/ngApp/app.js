var IntroToAngular;
(function (IntroToAngular) {
    angular.module('IntroToAngular', ['ngRoute'])
        .config(function ($routeProvider) {
        $routeProvider
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
})(IntroToAngular || (IntroToAngular = {}));
