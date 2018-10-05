import React from 'react';
import {Link} from 'react-router-dom';
import {Button} from 'reactstrap';
import Home from '../Home/Home';

const GameRulesTemplate = () =>{
    return( 
        <div>
            <Link to="/" onClick={Home}><Button className = 'back-button'>Back to Main Menu</Button></Link>
            <header className="card-header">
                <h4 className= 'card-header--title'>Game Rules</h4>
            </header>
            <div className="card-body">
                <p className="body-content">
                    The object of Tic Tac Toe is to get three in a row. 
                    You play on a three by three game board. 
                    The first player is known as X and the second is O. 
                    Players alternate placing Xs and Os on the game board 
                    until either oppent has three in a row or all nine squares are filled.
                </p>
            </div>
        </div>
    )
}
export default GameRulesTemplate;