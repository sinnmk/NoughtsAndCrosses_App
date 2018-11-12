import React, { Component } from 'react';
import { withStyles } from "@material-ui/core";
import PropTypes from 'prop-types';
import $ from 'jquery';
import BoxComponent from '../Board/Square';
import BoardStyles from '../Board/BoardStyles';
import {Card, CardContent} from '@material-ui/core';

class Board extends Component {

    constructor(props) {
        super(props);
        this.players = ["X", "O"];
        this.boxes = 9;
        this.state = {
            Turn: this.players[0],
            BoardState: new Array(this.boxes).fill("")
            // grid: new Array(this.boxes).fill("")
        };
    }

    render() {
        return (
            <div className="grid" style={{maxWidth:'300px', margin:'auto'}}>
                <Card style={{maxWidth:'150px', maxHeight: '40px', margin:"auto", textAlign:"center"}}>
                    <CardContent>
                        It's {this.state.Turn}'s turn
                    </CardContent>
                </Card>
                {this.state.BoardState.map((box, index) => {
                    return (
                        <BoxComponent key={index} onClick={e => {this.handleClick(index)}} name={box}>
                            {box}
                        </BoxComponent>
                    );
                })}
            </div>
        );
    }

    

    // initializeBoard(){
    //     return $.ajax({
    //         method: "POST",
    //         url: 'http://localhost:9000/board',
    //         data: JSON.stringify(this.convertBoardArrToString()),
    //         contentType: "application/json"
    //     }).done(function (data) {
    //         console.log('success', data)
    //     }).fail(function (xhr) {
    //         console.log('error', xhr)
    //     });
    // }

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