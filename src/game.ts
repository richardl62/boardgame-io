import { INVALID_MOVE } from 'boardgame.io/core';

// Return true if `cells` is in a winning configuration.
function IsVictory(cells: any) {
    const positions = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6],
      [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]
    ];
  
    const isRowComplete = (row: Array<number>) => {
      const symbols = row.map((i : number) => cells[i]);
      return symbols.every(i => i !== null && i === symbols[0]);
    };
  
    return positions.map(isRowComplete).some(i => i === true);
  }
  
  // Return true if all `cells` are occupied.
  function IsDraw(cells: any) {
    return cells.filter((c: any) => c === null).length === 0;
  }

const TicTacToe = {
    setup: () => ({cells: Array(9).fill(null)}),

    turn: {
        moveLimit: 1, 
    },

    moves: {
        clickCell: (G: any, ctx: any, id: any) => {
            if(G.cells[id]) {
                return INVALID_MOVE;
            }
            G.cells[id] = ctx.currentPlayer;
        }
    },

    endIf: (G: any, ctx: any) => {
        if(IsVictory(G.cells)) {
            return {winner: ctx.currentPlayer};
        }

        if(IsDraw(G.cells)) {
            return {draw: true};
        }
    }

};

export { TicTacToe };