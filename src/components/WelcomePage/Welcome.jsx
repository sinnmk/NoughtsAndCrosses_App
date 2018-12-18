import React, { Component } from 'react';
import { withStyles } from '@material-ui/core';
import PropTypes from 'prop-types';
import Game from '../Game/Game';

const styles = theme => ({
    button: {
        margin: theme.spacing.unit,
    },
    input: {
        display: 'none',
    },
});

class Welcome extends Component {

    constructor(props) {
        super(props);
        this.handleButtonClick = this.handleButtonClick.bind(this);
        this.state = {
            ShowGameComponent: false,
            ShowWelcomeComponent: true
        }
    }

    handleButtonClick() {
        this.setState({
            ShowGameComponent: true,
            ShowWelcomeComponent: false,
        })
    }

    render() {
        return (
            <div data-id="body">
                {this.state.ShowWelcomeComponent ?
                <div data-id="welcome">
                    <div data-id="welcome-msg">Welcome, to Noughts+Crosses!</div>
                    <div data-id="game-description">A simple site to play the popular game of Noughts + Crosses (Tic Tac Toe).</div>
                    <div data-action="play-button" onClick={this.handleButtonClick} >
                        Play Game
                    </div>
                </div> :null}
                {this.state.ShowGameComponent ? <Game/>: null}
            </div>
        );
    };
}
Welcome.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Welcome);