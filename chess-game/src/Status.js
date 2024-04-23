import React from 'react';

function Status({ game }) {
  let status = '';

  if (typeof game.in_checkmate === 'function' && game.in_checkmate()) {
    status = `Game over, ${game.turn() === 'w' ? 'black' : 'white'} is in checkmate.`;
  } else if (typeof game.in_draw === 'function' && game.in_draw()) {
    status = 'Game over, drawn position';
  } else {
    status = `Next player: ${game.turn() === 'w' ? 'white' : 'black'}`;
  }

  return <div>{status}</div>;
}

export default Status;