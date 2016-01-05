//Closure examples and practice

let buttons = document.getElementsByTagName('button');
addClickHandlers(buttons);

function addClickHandlers(buttons) {
    for (var i = 0; i < buttons.length; i++) {
        addClickHandler(buttons[i], i);
    }
}

function addClickHandler(button, index) {
    button.addEventListener('click', function () {
        alert('You clikced button ' + index);
    });
}