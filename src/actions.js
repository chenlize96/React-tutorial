export const SET_NEXT_PLAYER = "SET_NEXT_PLAYER";
export const UPDATE_SERIES = "UPDATE_SERIES";
export const UPDATE_BOARD = "UPDATE_BOARD";
export const REQUEST_PLAYERS = "REQUEST_PLAYERS";
export const SELECT_SQUARE = "SELECT_SQUARE";

export function setNextPlayer(text) {
    return {type: SET_NEXT_PLAYER, text};
}

export function updateSeries(text) {
    return {type: UPDATE_SERIES, text};
}

export function updateBoard(index, player) {
    return {type: UPDATE_BOARD, index, player};
}

export function requestPlayers(players) {
    return {type: REQUEST_PLAYERS, players};
}