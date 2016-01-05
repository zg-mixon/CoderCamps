'use strict';
function minMax(num1, num2) {
    if (num1 > num2) {
        console.log(num1);
    }
    else
        console.log(num2);
}
//minMax(12, 34);
//minMax(32, 6);
//minMax(67, 73);
function minMaxThree(num1, num2, num3) {
    if (num1 > num2 && num1 > num3) {
        console.log(num1);
    }
    else if (num2 > num1 && num2 > num3) {
        console.log(num2);
    }
    else
        console.log(num3);
}
//minMaxThree(1, 2, 3);
//minMaxThree(92, 32, 76);
//minMaxThree(53, 102, 89);
function vowel(letter) {
    letter = letter.toLowerCase();
    if (letter === 'a' || letter === 'e' || letter === 'i' || letter === 'o' || letter === 'u') {
        return true;
    }
    else
        return false;
}
//vowel('A');
//vowel('e'); 
//vowel('p');
function translate(word) {
    word = word.toLowerCase();
    var letters = word.split("");
    if (letters.forEach(!vowel(word))) {
    }
}
