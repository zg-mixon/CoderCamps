let gameBoard = [
    ['0', '1', '2'],
    ['3', '4', '5'],
    ['6', '7', '8']
];

let currentPlayer = 'X';


let row1 = gameBoard[0];

$(document).ready(function () {
    $('td').on('click', function () {
        let td = $(this);
        if (!td.text()) {
            //console.log(td.attr('id'));
            //get the row and column of the clicked td
            let coords: string[] = td.attr('id').split(',');
            let r = parseInt(coords[0]);
            let c = parseInt(coords[1]);
            //update the gameboard
            gameBoard[r][c] = currentPlayer;
            td.text(currentPlayer);
            //switch players
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
            
            //check for winner
            //check row for winner
            for (let i = 0; i < 3; i++) {
                checkWinner(gameBoard[i]);
            }
            //check col for winner
            for (let c = 0; c < 3; c++) {
                checkWinner([gameBoard[0][c],
                    gameBoard[1][c],
                    gameBoard[2][c]]);
            }
            //console.log(gameBoard[r][c]);
        };
});

function checkWinner(line: string[]) {
    if (line.every(function (ele) {
        return ele == line[0];
    })) {
        console.log(`Player ${line[0]} won`);
    }
