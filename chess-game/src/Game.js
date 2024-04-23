import React, { useState } from 'react';
import { Chess } from 'chess.js';
import Chessboard from 'chessboardjsx';
import Board from './Board';
import Status from './Status';
import History from './History';
import Controls from './Controls'

function Game() {
  const [game, setGame] = useState(new Chess());
  const [history, setHistory] = useState([]);

  const handleJumpTo = (move) => {
    setGame(new Chess(history[move].fen));
    setHistory(history.slice(0, move));
  };

  const handleReset = () => {
    setGame(new Chess());
  };

  const handleMove = ({ sourceSquare, targetSquare }) => {
    const piece = game.get(sourceSquare);

    let moveObj = {
      from: sourceSquare,
      to: targetSquare
    };
    if (piece && piece.type === 'p' && (targetSquare[1] === '8' || targetSquare[1] === '1')) {
      moveObj.promotion = 'q'; 
    }
    let move = game.move(moveObj);

    if (move === null) return;

    if (move) {
      setGame(new Chess(game.fen()));
    }
  };

  const handleRandomMove = () => {
    const moves = game.moves();
    const move = moves[Math.floor(Math.random() * moves.length)];
    game.move(move);
    setGame(new Chess(game.fen()));
  };
  
  

  return (
    <div>
      <Status game={game} />
      <Board position={game.fen()} onDrop={handleMove} />
      <History history={history} jumpTo={handleJumpTo} game={game} />
      <Controls game={game} onMove={handleRandomMove} onReset={handleReset} />
    </div>
  );
}

export default Game;