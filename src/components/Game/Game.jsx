import React, { Component } from 'react';
import {FormControl, Radio, Button, FormLabel, RadioGroup, withStyles, FormControlLabel} from '@material-ui/core';
import {Form, Row, Col} from 'reactstrap';
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
            gamemode: "",
            turnchoice: "",
            boardsize:"" 
        }
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
                <Row>
                    <Col>
                        <Form>
                            <FormControl component="fieldset" className = {classes.formControl}>
                                <FormLabel component="legend">PvC or PvP</FormLabel>
                                <RadioGroup aria-label="PVC or PVP" 
                                            name="game-mode-choice" 
                                            className={classes.group} 
                                            value={this.state.gamemode} 
                                            onChange={this.handleModeChoice}>
                                    <FormControlLabel value="pvc" control={<Radio />} label="PvC"/>
                                    <FormControlLabel value="pvp" control={<Radio />} label="PvP"/>
                                </RadioGroup>
                            </FormControl>
                        </Form>
                    </Col>
                <Form>
                    <Col>
                        <FormControl component="fieldset" className = {classes.formControl}>
                            <FormLabel component="legend">Board Size</FormLabel>
                            <RadioGroup aria-label="board-size" 
                                        name="board-size" 
                                        className={classes.group} 
                                        value={this.state.boardsize} 
                                        onChange={this.handleBoardSize}>
                                <FormControlLabel value="3x3" control={<Radio />} label="3x3"/>
                                <FormControlLabel value="4x4" control={<Radio />} label="4x4"/>
                            </RadioGroup>
                        </FormControl>
                    </Col>
                </Form>
                </Row>
                <Row>
                    <Form>
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
                    </Form>
                </Row>
                <Form>
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
                </Form>
                <div>
                    <Button id='turn-choice-button'>ENTER</Button>
                </div>
            </div>
        )
    }
  }
  Game.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Game);