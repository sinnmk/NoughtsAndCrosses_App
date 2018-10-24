import React, { Component } from 'react';
import {FormControl, Radio, Button, FormLabel, RadioGroup, withStyles, FormControlLabel} from '@material-ui/core';
import PropTypes from 'prop-types';
import $ from 'jquery';
import Styles from './Styles';
import Board from '../Board/Board';

class Game extends Component {

    constructor(props){
        super(props)
        this.state= {
            data: [
                {gamelevel: null,
                turnchoice: null,
                boardsize: null} 
            ]
        }
    }

    handleGameSetupSubmit(){
        $.ajax({
            dataType: 'json',
            type: 'POST',
            data: this.state,
            success: function(data){
                this.setState({data:data});
            }.bind(this),
            error: function(xhr, status, err){
                console.error(this.props.url, status, err.toString());
            }.bind(this) 
        });
    }

    createGame(){
        return (
            // console.log(this.state)
            <Board/>
            ); 
    }

    handleTurnChoice = event => {
        this.setState({
            turnchoice: event.target.value
        });
    }

    handleModeChoice = event => {
        this.setState({
            gamemode: event.target.value
        });
    }

    handleLevelChoice = event => {
        this.setState({
            gamelevel: event.target.value
        });
    }

    handleBoardSize = event => {
        this.setState({
            boardsize: event.target.value
        });
    }

    render(){
        const { classes } = this.props;

        return(
            <div className={classes.root}>
            <Board/>
                <FormControl component="fieldset" className = {classes.formControl}>
                    <FormLabel component="legend">Board Size</FormLabel>
                    <RadioGroup aria-label="board-size" 
                                name="board-size" 
                                className={classes.group} 
                                value={this.state.boardsize} 
                                onChange={this.handleBoardSize}>
                        <FormControlLabel value="3x3" control={<Radio />} label="3x3"/>
                        <FormControlLabel value="4x4" control={<Radio />} label="4x4"/>
                        <FormControlLabel value="5x5" control={<Radio />} label="5x5"/>
                    </RadioGroup>
                </FormControl>
                <FormControl component="fieldset" className = {classes.formControl}>
                    <FormLabel component="legend">X or O</FormLabel>
                    <RadioGroup aria-label="X or O" 
                                name="turn-choice" 
                                className={classes.group} 
                                value={this.state.turnchoice} 
                                onChange={this.handleTurnChoice}>
                        <FormControlLabel value="X" control={<Radio />} label="X"/>
                        <FormControlLabel value="O" control={<Radio />} label="O"/>
                        <FormControlLabel value="Random" control={<Radio />} label ="Random"/> 
                    </RadioGroup>
                </FormControl>
                <FormControl component="fieldset" className = {classes.formControl}>
                    <FormLabel component="legend">Game Level</FormLabel>
                    <RadioGroup aria-label="game-level-choice" 
                                name="game-level-choice" 
                                className={classes.group} 
                                value={this.state.gamelevel} 
                                onChange={this.handleLevelChoice}>
                        <FormControlLabel value="easy" control={<Radio />} label="Easy"/>
                        <FormControlLabel value="intermediate" control={<Radio />} label="Intermediate"/>
                        <FormControlLabel value="difficult" control={<Radio />} label="Difficult"/>
                    </RadioGroup>
                </FormControl>
                <div>
                    <Button onClick={()=> {this.createGame()}} size="small" variant="contained" color="secondary">Play</Button>
                </div>
            </div>
        )
    }
  }
  Game.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(Styles)(Game);