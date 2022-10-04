import React from "react";
import { connect } from 'react-redux';
import { requestPlayers, selectSquare } from "./actions";

const Square = ({value, selectSquare}) => (
            <button className="square" onClick={() => selectSquare()}>
                {value}
            </button>
        );

class Board extends React.Component {

    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/users").then(res => res.json()).then(res =>
           // {/* TODO: pass players to request players action */}
            {this.props.requestPlayers(res.map(i => i.name))}
        );
    }

    renderSquare(i) {
        return (
            <Square value={this.props.board[i]}
                    selectSquare={() => this.props.selectSquare(i)}
            />);
    }

    render() {
        return (
            <div>
                <div className="history">Score: X - {this.props.series["xWins"]}, O - {this.props.series["oWins"]}</div>
                <div className="status">{this.props.status + this.props.nextPlayer}</div>
                <div className="boardRow">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className="boardRow">
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className="boardRow">
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>

            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        nextPlayer: state.nextPlayer,
        series: state.series,
        status: state.status,
        board: state.board
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        selectSquare: (id) => dispatch(selectSquare(id)),
        // TODO: create a "requestPlayers" function prop that dispatches the request players action
        requestPlayers: (players) => dispatch(requestPlayers(players))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Board);
