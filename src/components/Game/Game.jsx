import { Card, CardContent, FormControl, FormLabel, Radio, RadioGroup, FormControlLabel, Button, withStyles } from "@material-ui/core";
import PropTypes from 'prop-types';
import React, {Component} from 'react';
import GameStyles from './GameStyles';
import Board from '../Board/Board';
import $ from 'jquery';

class Game extends Component{
    constructor(props){
        super(props);
        this.props = props;
        this.state = {
            TurnChoice: null, 
            GameLevel: null,
            BoardDimension: null,
            IsGameOver: false,
            IsGameWon: false,
            ShowBoardComponent: false,
            ShowGameComponent: true 
        }
    }

    createGame(){
        return $.ajax({
            method: "POST",
            url: 'http://localhost:9000/game',
            data: JSON.stringify(this.state),
            contentType: "application/json"
        }).done(function(data){
            console.log('success', data);
        }).fail(function(xhr){
            console.log('error', xhr);
        });
    }

    handleTurnChoice = event => {
        this.setState({
            TurnChoice: event.target.value
        });
    }

    handleLevelChoice = event => {
        this.setState({
            GameLevel: event.target.value
        });
    }

    handleBoardDimension = event => {
        this.setState({
            BoardDimension: event.target.value
        });
    }
    _onButtonClick(){
        this.createGame();
        this.setState({
            ShowBoardComponent: true,
            ShowGameComponent: false
        })
    }

    render(){
        const {classes} = this.props;

        return(
            <div className={classes.root} style={{maxWidth:'550px', margin: 'auto'}}>
                {this.state.ShowGameComponent ? 
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
                            </RadioGroup>
                        </FormControl>
                        <div>
                            <Button onClick={()=> {this._onButtonClick()}} size="small" color="secondary">SUBMIT</Button>
                        </div>
                    </CardContent>
                </Card>
                :null}
                {this.state.ShowBoardComponent ?
                    <Board/>: 
                    null
                }
        </div>
        )
    }
}

Game.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(GameStyles)(Game);