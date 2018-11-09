import React, { Component } from 'react';
import { withStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { Jumbotron } from 'reactstrap';
import PropTypes from 'prop-types';

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


        }
    }

    handleButtonClick() {

    }

    render() {
        const { classes } = this.props;
        return (
            <div>
                <Jumbotron>
                    <h1 className="display-3">Welcome, to Noughts+Crosses!</h1>
                    <p className="lead">A simple site to play different variations of the popular game of Noughts + Crosses (Tic Tac Toe).</p>
                    <hr className="my-2" />
                    <p>Register to keep track of your game data, or just go ahead and click "Play Game" to play right away!</p>
                    <p className="lead">
                        <Button color="secondary" onClick={() => this.handleButtonClick} className={classes.button}>
                            Play Game
                        </Button>
                    </p>
                </Jumbotron>
            </div>
        );
    };
}
Welcome.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Welcome);