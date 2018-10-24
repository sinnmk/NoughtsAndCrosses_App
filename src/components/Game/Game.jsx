import React, { Component } from 'react';
import {FormControl, Radio, Button, FormLabel, RadioGroup, withStyles, FormControlLabel} from '@material-ui/core';
import PropTypes from 'prop-types';

const styles = theme => ({
    root: {
        display: 'flex',
    },
    formControl: {
        margin: theme.spacing.unit * 3,
    },
    group: {
        margin: `${theme.spacing.unit}px 0`,
    },
});

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

    createGame(){
        return (
            console.log(this.state)
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
                        <FormControlLabel value="easy-level" control={<Radio />} label="Easy"/>
                        <FormControlLabel value="medium-level" control={<Radio />} label="Intermediate"/>
                        <FormControlLabel value="hard-level" control={<Radio />} label="Difficult"/>
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

export default withStyles(styles)(Game);