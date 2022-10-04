import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {Provider} from "react-redux";
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import Board from './Board';
import Players from './Players';
import { configureStore } from '@reduxjs/toolkit'
import { tictactoeApp } from "./reducers";

import reportWebVitals from './reportWebVitals';

/**
 * Tic-tac-toe game.
 */
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
                <div>
                    <Link to={"/players"}>Players</Link>
                </div>
            </div>
        );
    }
}

const store = configureStore({reducer: tictactoeApp});
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
      <Provider store={ store }>
          <Router>
              <Routes>
                  {/* <Route exact path={"/"}>
                      <Game />
                  </Route> */}
                  <Route path="/" element={<Game />} /> 
                  {/* TODO: create a route for the '/players' endpoint */}
                  <Route exact path={"/players"} element={<Players />} />      
              </Routes>
          </Router>

      </Provider>
  </React.StrictMode>,
  //document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
