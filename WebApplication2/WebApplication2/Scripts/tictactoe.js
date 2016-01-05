var gameBoard = [
    ['0', '1', '2'],
    ['3', '4', '5'],
    ['6', '7', '8']
];
var currentPlayer = 'X';
var row1 = gameBoard[0];
$(document).ready(function () {
    $('td').on('click', function () {
        var td = $(this);
        if (!td.text()) {
            //console.log(td.attr('id'));
            //get the row and column of the clicked td
            var coords = td.attr('id').split(',');
            var r = parseInt(coords[0]);
            var c = parseInt(coords[1]);
            //update the gameboard
            gameBoard[r][c] = currentPlayer;
            td.text(currentPlayer);
            //switch players
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
            //check for winner
            //check row for winner
            for (var i = 0; i < 3; i++) {
                checkWinner(gameBoard[i]);
            }
            //check col for winner
            for (var c_1 = 0; c_1 < 3; c_1++) {
                checkWinner([gameBoard[0][c_1],
                    gameBoard[1][c_1],
                    gameBoard[2][c_1]]);
            }
        }
        ;
    });
    function checkWinner(line) {
        if (line.every(function (ele) {
            return ele == line[0];
        })) {
            console.log("Player " + line[0] + " won");
        }
    }
});
