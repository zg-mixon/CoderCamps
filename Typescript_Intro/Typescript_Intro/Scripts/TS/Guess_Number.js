'use strict';
var randomNumber = Math.floor(Math.random() * 10) + 1;
console.log(randomNumber);
//let userAnswer = parseInt(prompt('Please guess a number 1 - 10'));
//if (userAnswer != randomNumber) {
//    alert('You did not guess correctly, run this once more to try again!');
//}
//else alert('You got it!');
var count = 10000;
//Loop that prompts the user to guess until they guess correctly. Also tells them they're close if they are within + or - 2 of the correct number.
for (var i = 0; i < count; i++) {
    var userAnswer = parseInt(prompt('Please guess a number 1 - 10'));
    if (userAnswer == randomNumber) {
        i = 10000;
        alert('You got it!');
        break;
    }
    else if (userAnswer > randomNumber && userAnswer <= (randomNumber + 2)) {
        alert('You are close!');
    }
    else if (userAnswer < randomNumber && userAnswer >= (randomNumber - 2)) {
        alert('You are close!');
    }
    else {
        alert('You did not guess correctly, run this once more to try again!');
    }
}
