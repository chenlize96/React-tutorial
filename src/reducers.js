import { SELECT_SQUARE, REQUEST_PLAYERS } from "./actions";

const initialState = {
    players: [],
    nextPlayer: 'X',
    series: {xWins: 0, oWins: 0},
    status: 'Player turn: ',
    board: Array(9).fill("")
};

export function tictactoeApp( state = initialState, action) {
    switch (action.type) {
        // update the tic-tac-toe board
        case SELECT_SQUARE:
            if (!state.board[action.id]) {
                let newBoard = [...state.board];
                let player = state.nextPlayer;
                newBoard[action.id] = player;

                let winner = wonGame(player, newBoard);
                let nextPlayer = (player === "X") ? "O" : "X";

                // game over, player wins
                if (winner) {
                    let xWins = state.series.xWins;
                    let oWins = state.series.oWins;
                    if (player === "X")
                        xWins++;
                    else
                        oWins++;
                    return {
                        ...state,
                        board: Array(9).fill(''), series: {xWins, oWins}, nextPlayer,
                        status: player + ' wins! next: '
                    };
                }

                // game over, tie
                else if (tieGame(newBoard)) {
                    return {
                        ...state,
                        board: Array(9).fill(''), nextPlayer,
                        status: 'Draw, next turn: '
                    };
                } else {
                    return {...state, nextPlayer, board: newBoard, status: 'Player turn: '}
                }
            }
            break;
        // update state with requested players from the dummy server
        case REQUEST_PLAYERS:
            return {...state, players: action.players};
        default:
            return state;
    }
    return state;
}

/**
 * Check to see if current player won the game.
 * @param player  The player that just made a move
 * @param board  The tic-tac-toe board
 * @returns True if the player won the game, false otherwise
 */
function wonGame(player, board) {
    let winnerFound = false;
    const winCombos = [ [0, 1, 2], [0, 3, 6], [0, 4, 8],
        [1, 4, 7],
        [2, 5, 8], [2, 4, 6],
        [3, 4, 5],
        [6, 7, 8]];

    // loop through all the winning combinations
    winCombos.forEach(combo => {
        let win = true;
        // check if player made a move in each board location of the winning combination
        combo.forEach(pos =>  win = win && (board[pos] === player));
        if (win) winnerFound = true;
    });

    return winnerFound;
}

/**
 * Check to see if the game ended in a draw
 * @param board  The tic-tac-toe board
 * @returns True if the game is a draw, false otherwise
 */
function tieGame(board) {
    let tie = true;
    board.forEach(val => tie = tie && val);
    return tie;
}
