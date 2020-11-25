import React from "react";
import { Client } from 'boardgame.io/react';
import { Local, SocketIO } from 'boardgame.io/multiplayer';

import { TicTacToe } from './game';
import { TicTacToeBoard } from './board';

const local = false;

const TicTacToeClient = Client({
  game: TicTacToe,
  board: TicTacToeBoard,

  multiplayer: local? Local() : SocketIO({ server: 'localhost:8000' }),

  // debug: false 
});


function App() {
  return (
    <div>
      <h3>Player 0</h3>
      <TicTacToeClient playerID="0" />
      <h3>Player 1</h3>
      <TicTacToeClient playerID="1" />
    </div>
    );
}
export default App;
