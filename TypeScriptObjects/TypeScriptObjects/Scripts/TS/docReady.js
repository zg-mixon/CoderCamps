'use strict';
// jquery to make sure that the js script doesn't load until the html page has been comepletely loaded
$(document).ready(function () {
    $('div').on('click', function () {
        console.log('clicked the div');
    });
    console.log('ran the ready');
});
console.log('ran the script');
