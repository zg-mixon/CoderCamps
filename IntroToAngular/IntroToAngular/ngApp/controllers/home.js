var IntroToAngular;
(function (IntroToAngular) {
    var Controllers;
    (function (Controllers) {
        var HomeController = (function () {
            function HomeController() {
            }
            HomeController.prototype.addNumbers = function () {
                console.log("I executed!");
                this.totalAdd = this.input1 + this.input2;
            };
            HomeController.prototype.subNumbers = function () {
                console.log("I executed!");
                this.totalSubtract = this.input1 - this.input2;
            };
            HomeController.prototype.multNumbers = function () {
                console.log("I executed!");
                this.totalSubtract = this.input1 * this.input2;
            };
            HomeController.prototype.divNumbers = function () {
                console.log("I executed!");
                this.totalSubtract = this.input1 / this.input2;
            };
            return HomeController;
        })();
        angular.module('IntroToAngular')
            .controller('HomeController', HomeController);
        console.log("hello!");
    })(Controllers = IntroToAngular.Controllers || (IntroToAngular.Controllers = {}));
})(IntroToAngular || (IntroToAngular = {}));
console.log("please!");
