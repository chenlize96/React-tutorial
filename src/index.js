import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

/**
 * Tic-tac-toe square.
 */
class Square extends React.Component {
    render() {
        return (
            <button className="square" onClick={()=>this.props.onClick()}>
                {this.props.value}
            </button>
        );
    }
}

/**
 * Tic-tac-toe 3x3 board.
 */
class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            board: Array(9).fill(""), nextPlayer: 'X'
        }
    }
    renderSquare(i) {
        return <Square value={this.state.board[i]} onClick={()=>this.handleClick(i)}/>;
    }

    handleClick(i) {
        let newBoard = [...this.state.board];
        let next = this.state.nextPlayer;
        // TODO update board state
        if (newBoard[i] !== "") return;
        newBoard[i] = next;
        next = next === "X" ? "O" : "X";
        console.log(newBoard);
        this.setState({board: newBoard, nextPlayer: next})
    }
    render() {
        const status = 'Next player: ' + this.state.nextPlayer;

        return (
            <div>
                <div className="status">{status}</div>
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

class Game extends React.Component {
    render() {
        return (
            <div className="game">
                <div className="game-board">
                    <Board />
                </div>
                <div className="game-info">
                    <div>{/* status */}</div>
                    <ol>{/* players */}</ol>
                </div>
            </div>
        );
    }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Game />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
