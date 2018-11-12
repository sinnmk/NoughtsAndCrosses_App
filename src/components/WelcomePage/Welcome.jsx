import React, { Component } from 'react';
import { withStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { Jumbotron } from 'reactstrap';
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
        this.props = props;
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
        const { classes } = this.props;
        return (
            <div>
                {this.state.ShowWelcomeComponent ?
                <Jumbotron style={{maxWidth: '600px', margin: 'auto'}}>
                    <h1 className="display-3">Welcome, to Noughts+Crosses!</h1>
                    <p className="lead">A simple site to play different variations of the popular game of Noughts + Crosses (Tic Tac Toe).</p>
                    <hr className="my-2" />
                    <p>Register to keep track of your game data, or just go ahead and click "Play Game" to play right away!</p>
                    <p className="lead">
                        <Button color="secondary" onClick={() => this.handleButtonClick()} className={classes.button}>
                            Play Game
                        </Button>
                    </p>
                </Jumbotron>
                :null}
                {this.state.ShowGameComponent ? 
                <Game/>:
                null
                }
            </div>
        );
    };
}
Welcome.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Welcome);