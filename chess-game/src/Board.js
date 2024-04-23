import React from 'react';
import Chessboard from 'chessboardjsx';

function Board({ position, onDrop }) {
  return <Chessboard position={position} onDrop={onDrop} />;
}

export default Board;