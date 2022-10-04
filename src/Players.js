import {Link} from "react-router-dom";
import React from "react";
import {connect} from "react-redux";

function Players({players}) {
    return (
        <div>
            <h2>Players</h2>
            <ol>
                {/* TODO: create an ordered list of players */}
                {players.map(p => <li key={p}>{p}</li>)}
            </ol>
            <Link to={"/"}>Home</Link>
        </div>
    );
}

const mapStateToProps = (state) => {
    //console.log(state);
    return {
        // TODO: create a "players" array prop that holds only player names. Hint: use array map.
        players: state.players,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Players);
