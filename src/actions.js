/*
 * action types
 */
export const REQUEST_PLAYERS = "REQUEST_PLAYERS";
export const SELECT_SQUARE = "SELECT_SQUARE";


/*
 * action creator
 */
export function selectSquare(id) {
    return {type: SELECT_SQUARE, id}
}

export function requestPlayers(players) {
    return {type: REQUEST_PLAYERS, players}
}


