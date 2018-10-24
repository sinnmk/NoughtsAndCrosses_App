import React, {Component} from 'react';
import {withStyles} from '@material-ui/core';
import Styles from './Styles';
import Square from './Square';

class Board extends Component {
    constructor(props){
        super(props);
        this.props = props;
    }

    renderSquare(i){
        return <Square value={i} />;
    }

    render(){
        const {classes} = this.props;
        return(
            <div className={classes.root}>

            </div>
        )
    }
}
export default withStyles(Styles)(Board);