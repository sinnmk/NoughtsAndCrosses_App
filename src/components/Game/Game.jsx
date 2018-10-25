import React, { Component } from 'react';
import {withStyles} from '@material-ui/core';
import PropTypes from 'prop-types';
import Styles from './Styles';
import Board from '../Board/Board';

class Game extends Component {

    constructor(props){
        super(props);
        this.props = props;
    }

    render(){
        return (
            <Board/>
        )
    }
};

Game.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(Styles)(Game);