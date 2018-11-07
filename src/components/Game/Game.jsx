import { Card, CardContent, FormControl, FormLabel, Radio, RadioGroup, FormControlLabel, Button, withStyles } from "@material-ui/core";
import PropTypes from 'prop-types';
import React, {Component} from 'react';
import GameStyles from './GameStyles';
import $ from 'jquery';
import Board from '../Board/Board';
import ReactDOM from 'react-dom';

class Game extends Component{
    constructor(props){
        super(props);
        this.props = props;
        this.state = {
            TurnChoice: null, 
            GameLevel: null,
            BoardDimension: null,
            IsGameOver: false,
            IsGameWon: false
        }
        this.initializeBoard() = this.intitializeBoard().bind(this);
    }
    //-----------trying to figure out how to initialize the board and rerender page to show board from gamesetup
    // initializeBoard(){
    //     return (
    //     <div>
    //         <Board/>
    //     </div>
    //     )

    // }

    createGame(){
        return $.ajax({
            method: "POST",
            url: 'http://localhost:9000/game',
            data: JSON.stringify(this.state),
            contentType: "application/json"
        }).done(function(data){
            console.log('success', data);
            //is this where I should initialize board?
            // this.initializeBoard()
        }).fail(function(xhr){
            console.log('error', xhr);
        });
    }

    handleTurnChoice = event => {
        this.setState({
            TurnChoice: parseInt(event.target.value, 10)
        });
        return this;
    }

    handleLevelChoice = event => {
        this.setState({
            GameLevel: parseInt(event.target.value, 10)
        });
        return this;
    }

    handleBoardDimension = event => {
        this.setState({
            BoardDimension: parseInt(event.target.value, 10)
        });
        return this;
    }

    render(){
        const {classes} = this.props;

        return(
            <div className={classes.root}>
                <Card>
                    <CardContent>
                    <FormControl component="fieldset" className = {classes.formControl}>
                        <FormLabel component="legend">Board Size</FormLabel>
                        <RadioGroup aria-label="board-size" 
                                    name="board-size" 
                                    className={classes.group} 
                                    value={this.state.BoardDimension} 
                                    onChange={this.handleBoardDimension}>
                            <FormControlLabel value='3' control={<Radio />} label="3x3"/>
                            <FormControlLabel value='4' control={<Radio />} label="4x4"/>
                            <FormControlLabel value='5' control={<Radio />} label="5x5"/>
                        </RadioGroup>
                    </FormControl>
                    <FormControl component="fieldset" className = {classes.formControl}>
                        <FormLabel component="legend">X or O</FormLabel>
                        <RadioGroup aria-label="X or O" 
                                    name="turn-choice" 
                                    className={classes.group} 
                                    value={this.state.TurnChoice} 
                                    onChange={this.handleTurnChoice}>
                            <FormControlLabel value='1' control={<Radio />} label="X"/>
                            <FormControlLabel value='2' control={<Radio />} label="O"/>
                            <FormControlLabel value='3' control={<Radio />} label ="Random"/> 
                        </RadioGroup>
                    </FormControl>
                    <FormControl component="fieldset" className = {classes.formControl}>
                        <FormLabel component="legend">Game Level</FormLabel>
                        <RadioGroup aria-label="game-level-choice" 
                                    name="game-level-choice" 
                                    className={classes.group} 
                                    value={this.state.GameLevel} 
                                    onChange={this.handleLevelChoice}>
                            <FormControlLabel value='1' control={<Radio />} label="Easy"/>
                            <FormControlLabel value='2' control={<Radio />} label="Intermediate"/>
                            <FormControlLabel value='3' control={<Radio />} label="Difficult"/>
                        </RadioGroup>
                    </FormControl>
                    <div>
                        <Button onClick={()=> {this.createGame()}} size="small" variant="contained" color="secondary">Submit</Button>
                    </div>
                </CardContent>
            </Card>
        </div>
        )
    }
}

Game.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(GameStyles)(Game);


    
