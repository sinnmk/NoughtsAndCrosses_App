import React, { Component } from 'react';
import { withStyles } from "@material-ui/core";
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
            turn: this.players[0],
            grid: new Array(this.boxes).fill("")
        };
    }

    setMark = index => {
        this.setState(prevState => {
            const newGrid = [...prevState.grid];
            newGrid[index] = prevState.turn;
            return {
                turn:
                    prevState.turn === this.players[0]
                        ? this.players[1]
                        : this.players[0],
                grid: newGrid
            };
        });
    };

    render() {
        return (
            <div className="grid">
                {this.state.grid.map((box, index) => {
                    return (
                        <BoxComponent
                            key={index}
                            onClick={e => {
                                this.setMark(index);
                            }}
                            name={box}>
                            {box}
                        </BoxComponent>
                    );
                })}
            </div>
        );
    }

    createBoard() {
        return $.ajax({
            method: "POST",
            url: 'http://localhost:9000/board',
            data: JSON.stringify(this.state),
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