import React from 'react';

function Controls({ game, onMove, onReset }) {
    return (
        <div>
            <button onClick={onMove}>Move</button>
            <button onClick={onReset}>Reset</button>
        </div>
    );
}

export default Controls;