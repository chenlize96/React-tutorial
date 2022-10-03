import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

import { Provider } from "react-redux";
import Board from "./board";
//import { createStore } from 'redux';  @deprecate
import { legacy_createStore as createStore } from "redux";
import { tictactoeApp } from "./reducers";

const store = createStore(tictactoeApp);

const Game = () => (
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

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <Game />
  </Provider>
  //document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
