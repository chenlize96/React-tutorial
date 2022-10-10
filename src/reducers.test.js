import { tictactoeApp } from "./reducers";
import { selectSquare } from "./actions";

test('unknown action', () => {
    let newState = tictactoeApp(undefined, { type: "UNKNOWN ACTION"});
    expect(newState).toEqual({
        players: [],
        nextPlayer: 'X',
        series: {xWins: 0, oWins: 0},
        status: 'Player turn: ',
        board: Array(9).fill("")});
});

test('select squares until X wins', () => {
    let newState = tictactoeApp(undefined, selectSquare(2));
    newState = tictactoeApp(newState, selectSquare(3));
    newState = tictactoeApp(newState, selectSquare(5));
    newState = tictactoeApp(newState, selectSquare(4));
    newState = tictactoeApp(newState, selectSquare(8));
    expect(newState).toEqual({
        players: [],
        nextPlayer: 'O',
        series: {xWins: 1, oWins: 0},
        status: 'X wins! next: ',
        board: ["", "", "", "", "", "", "", "", ""] });
});
