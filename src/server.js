const { Server } = require('boardgame.io/server');
const { TicTacToe } = require('./game');

const server = Server({ games: [TicTacToe] });

server.run(8000);