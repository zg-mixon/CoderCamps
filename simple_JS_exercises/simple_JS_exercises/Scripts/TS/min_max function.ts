'use strict';

function minMax(num1: number, num2: number) {
    if (num1 > num2) {
        console.log(num1);
    }
    else console.log(num2);
}

//minMax(12, 34);
//minMax(32, 6);
//minMax(67, 73);

function minMaxThree(num1: number, num2: number, num3:number) {
    if (num1 > num2 && num1 > num3) {
        console.log(num1);
    }
    else if (num2 > num1 && num2 > num3) {
        console.log(num2);
    }
    else console.log(num3);
}

//minMaxThree(1, 2, 3);
//minMaxThree(92, 32, 76);
//minMaxThree(53, 102, 89);

function vowel(letter: string) {
    letter = letter.toLowerCase();
    if (letter === 'a' || letter === 'e' || letter === 'i' || letter === 'o' || letter === 'u') {
        return true;
    }
    else return false;
}

//vowel('A');
//vowel('e'); 
//vowel('p');

function translate(word: string) {
    word = word.toLowerCase();
    let letters = word.split("");
    if (letters.forEach(!vowel(word))) {
    
    }
        
}
