import React, { Component } from 'react';
import { withStyles, Button } from "@material-ui/core";
import PropTypes from 'prop-types';
import $ from 'jquery';
import BoxComponent from '../Board/Square';
import BoardStyles from '../Board/BoardStyles';

class Board extends Component {

    constructor(props) {
        super(props);
        this.players = ["X", "O"];
        this.boxes = 9;
        this.state = {
            Turn: this.players[0],
            BoardState: new Array(this.boxes).fill("")
        };
    }

    resetGame(){
        this.setState({
            Turn: this.players[0],
            BoardState: new Array(this.boxes).fill("")
        });
    }

    turnsEmpty(){
        for (let i = 0; i < this.state.BoardState.length; i++){
            if (this.state.BoardState[i] === ""){
                return false
            }
        }
        return true;
    }

    render() {
        const winner = this.checkForWin()
        let gameStatus;
        if (winner) {
            gameStatus = "Winner is: " + winner
        }else if (this.turnsEmpty() === true){
            gameStatus = "It's a draw!"
        }else{
            gameStatus = "Next player is: " + this.state.Turn
        }
        return (
            <div className="grid" style={{maxWidth:'300px', margin:'auto'}}>
                <div>
                    {gameStatus}
                </div>
                {this.state.BoardState.map((box, index) => {
                    return (
                        <BoxComponent key={index} onClick={e => {this.handleClick(index)}} name={box}>
                            {box}
                        </BoxComponent>
                    );
                })}
                <div>
                    <Button onClick = {() =>this.resetGame()} size="small" color="secondary" >RESET</Button>
                </div>
            </div>
        );
    }

    checkForWin(){
        const boardState = this.state.BoardState
        const winCombos = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];
        for (let i = 0; i < winCombos.length; i++) {
            const [a, b, c] = winCombos[i];
            if (boardState[a] && boardState[a] === boardState[b] && boardState[a] === boardState[c]) {
            return boardState[a];
            }
        }
        return null;
    }

    convertBoardArrToString(){
        var data = Object.assign({}, this.state.BoardState);
        return data;
    }
    
    setMark = index => {
        this.setState(prevState => {
            const newGrid = [...prevState.BoardState];
            newGrid[index] = prevState.Turn;
            return {
                Turn:
                    prevState.Turn === this.players[0]
                        ? this.players[1]
                        : this.players[0],
                BoardState: newGrid
            };
        });
    };

    handleClick = index =>{
        this.setMark(index);
        var boardData = Object.assign({}, this.convertBoardArrToString(), this.state.Turn);

        return $.ajax({
            method: "PUT",
            url: 'http://localhost:9000/board',
            data: JSON.stringify(boardData),
            contentType: "application/json"
        }).done(function (data) {
            console.log('success', data)
        }).fail(function (xhr) {
            console.log('error', xhr)
        });
    }
}

Board.propTypes={
    classes: PropTypes.object.isRequired,
};
export default withStyles(BoardStyles)(Board);