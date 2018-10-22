import React, { Component } from 'react';
import {FormControl, Radio, FormLabel, RadioGroup, withStyles, FormControlLabel} from '@material-ui/core';
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

    state = {
        value: 'x',
    }

    handleChange = event => {
        this.setState({value: event.target.value});
    }

    render(){
        const { classes } = this.props;

        return(
            <div className={classes.root}>
                <FormControl component="fieldset" className = {classes.formControl}>
                    <FormLabel component="legend">X or O</FormLabel>
                    <RadioGroup aria-label="X or O" 
                                name="turnChoice" 
                                className={classes.group} 
                                value={this.state.value} 
                                onChange={this.handleChange}>
                        <FormControlLabel value="X" control={<Radio />} label="X"/>
                        <FormControlLabel value="O" control={<Radio />} label="O"/>
                        <FormControlLabel value="Random" control={<Radio />} label ="Random"/> 
                    </RadioGroup>
                </FormControl>
            </div>
        )
    }
  }
  Game.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Game);