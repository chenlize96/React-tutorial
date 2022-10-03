import React from "react";
import { connect } from "react-redux";
//import { selectSquare } from "./actions";

/**
 * Tic-tac-toe square.
 */
const Square = ({ value, selectSquare }) => (
  <button className="square" onClick={() => selectSquare()}>
    {value}
  </button>
);

/**
 * Tic-tac-toe 3x3 board.
 */
class Board extends React.Component {
  renderSquare(i) {
    return (
      <Square
        value={this.props.board[i]}
        selectSquare={() => this.props.selectSquare(i)}
      />
    );
  }

  render() {
    const status = this.props.status;
    const player = this.props.nextPlayer;

    return (
      <div>
        <div className="status">{status + player}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
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
    board: state.board,
    player: state.player,
    status: state.status,
    nextPlayer: state.nextPlayer,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    selectSquare: (id) => dispatch({ type: "SELECT_SQUARE", id }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Board);
