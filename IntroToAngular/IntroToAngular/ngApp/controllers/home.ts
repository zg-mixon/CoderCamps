namespace IntroToAngular.Controllers {
    
    class HomeController {

        public username;

        //public setUserName(value: string): void {
        //    this.username = value;
        //}

        public input1: number;
        public input2: number;

        public totalAdd: number;
        public totalSubtract: number;
        public totalMultiply: number;
        public totalDivide: number;

        public addNumbers() {
            console.log("I executed!");
            this.totalAdd = this.input1 + this.input2;
        }
        public subNumbers() {
            console.log("I executed!");
            this.totalSubtract = this.input1 - this.input2;
        }
        public multNumbers() {
            console.log("I executed!");
            this.totalSubtract = this.input1 * this.input2;
        }
        public divNumbers() {
            console.log("I executed!");
            this.totalSubtract = this.input1 / this.input2;
        }
    }
    angular.module('IntroToAngular')
        .controller('HomeController', HomeController);
    console.log("hello!");
}
console.log("please!");