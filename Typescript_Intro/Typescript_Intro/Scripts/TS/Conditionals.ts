'use strict';

enum Colors {
    Orange,
    Yellow,
    Brown,
    Red
}

let selectedColor = Colors.Red;

//regular if, else if, else statement
if (selectedColor == Colors.Yellow) {
    console.log('Yellow');
}
else if (selectedColor == Colors.Orange) {
    console.log('Orange');
}
else if (selectedColor == Colors.Brown) {
    console.log('Brown');
}
else (selectedColor == Colors.Red) 
    console.log('Red');


    //ternary if statement example
    console.log(
        selectedColor == Colors.Yellow ? 'Yellow'
        : selectedColor == Colors.Orange ? 'Orange'
            : selectedColor == Colors.Brown ? 'Brown'
                    : 'Red');
