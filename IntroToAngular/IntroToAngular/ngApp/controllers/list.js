var IntroToAngular;
(function (IntroToAngular) {
    var Controllers;
    (function (Controllers) {
        var ListController = (function () {
            function ListController() {
                this.contacts = [
                    { firstName: 'Larry', lastName: 'Joe', number: '678 722 1045', email: 'slipperythompson@gmail.com', skype: 'zach.mixon' },
                    { firstName: '', lastName: 'Joe', number: '678 722 1045', email: 'slipperythompson@gmail.com', skype: 'zach.mixon' },
                    { firstName: 'Larry', lastName: 'Joe', number: '678 722 1045', email: 'slipperythompson@gmail.com', skype: 'zach.mixon' },
                    { firstName: 'Larry', lastName: 'Joe', number: '678 722 1045', email: 'slipperythompson@gmail.com', skype: 'zach.mixon' }
                ];
            }
            return ListController;
        })();
        Controllers.ListController = ListController;
    })(Controllers = IntroToAngular.Controllers || (IntroToAngular.Controllers = {}));
})(IntroToAngular || (IntroToAngular = {}));
