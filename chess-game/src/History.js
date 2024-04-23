import React from 'react';

function History({ history, jumpTo, game }) {
    return (
        <ol>
        {history && history.map((_, move) => (
            <li key={move}>
            <button onClick={() => jumpTo(move)}>{move === 0 ? 'Go to game start' : `Go to move #${move}`}</button>
            </li>
        ))}
        </ol>
    );
}

export default History;