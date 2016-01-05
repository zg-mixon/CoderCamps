let winCondition = [[0, 1, 2], [0, 4, 8], [0, 3, 6], [1, 4, 7], [2, 4, 6], [2, 5, 8], [3, 4, 5], [6, 7, 8]];
let board = [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ' ];


let user = 'X';

$(document).ready(function () {
    $('#zero').click(function () {
        if (board[0] === ' ') {
            $(this).prepend(user);
            board[0] = user;
        }
        
    });
});

$(document).ready(function () {
    $('#one').click(function () {
        if (board[1] === ' ') {
            $(this).prepend(user);
            board[1] = user;
        }

    });
});

$(document).ready(function () {
    $('#two').click(function () {
        if (board[2] === ' ') {
            $(this).prepend(user);
            board[2] = user;
        }

    });
});
$(document).ready(function () {
    $('#three').click(function () {
        if (board[3] === ' ') {
            $(this).prepend(user);
            board[3] = user;
        }

    });
});
$(document).ready(function () {
    $('#four').click(function () {
        if (board[4] === ' ') {
            $(this).prepend(user);
            board[4] = user;
        }

    });
});
$(document).ready(function () {
    $('#five').click(function () {
        if (board[5] === ' ') {
            $(this).prepend(user);
            board[5] = user;
        }

    });
});
$(document).ready(function () {
    $('#six').click(function () {
        if (board[6] === ' ') {
            $(this).prepend(user);
            board[6] = user;
        }

    });
});
$(document).ready(function () {
    $('#seven').click(function () {
        if (board[7] === ' ') {
            $(this).prepend(user);
            board[7] = user;
        }

    });
});
$(document).ready(function () {
    $('#eight').click(function () {
        if (board[8] === ' ') {
            $(this).prepend(user);
            board[8] = user;
        }

    });
});

