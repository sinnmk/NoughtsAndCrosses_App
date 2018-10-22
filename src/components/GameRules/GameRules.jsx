import React, { Component } from 'react';

class GameRules extends Component {

    render() {
        return (
            <div>
                <div className="game-rules-header">Game Rules</div>
                <div className="body-container">
                    The object of Tic Tac Toe is to get three in a row.
                    You play on a three by three game board.
                    The first player is known as X and the second is O.
                    Players alternate placing Xs and Os on the game board
                    until either oppent has three in a row or all nine squares are filled.
                </div>
            </div>
        )
    }
}

export default GameRules;

