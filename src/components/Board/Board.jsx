import React, {Component} from 'react';
import {Paper, Grid, Button, withStyles} from '@material-ui/core';
import Styles from './Styles';
import PropTypes from 'prop-types';

class Board extends Component {

    static propTypes = {
        name: PropTypes.string,
    }

    constructor(props){
        super(props);
        this.props = props;
        this.state = {
            disabled: true,
            label: "O"
        }
        this.enableEdit = this.enableEdit.bind(this);
    }

    enableEdit(){
        this.setState({
            disabled: !this.state.disabled,
            label: "X"
        })
    }

    renderRow(){
        const {classes} = this.props;
        return (
            <Grid container spacing ={1}>
                <Grid item xs={1} align-content-xs-center>
                    <Paper className={classes.paper}> 
                        <Button onClick={this.enableEdit} label={this.state.label}primary={true}> </Button>
                    </Paper>
                </Grid>
                <Grid item xs={1} align-content-xs-center>
                    <Paper className={classes.paper}> 
                        <Button onClick={this.enableEdit} label={this.state.label}primary={true}> </Button>
                    </Paper>
                </Grid>
                <Grid item xs={1} align-content-xs-center>
                    <Paper className={classes.paper}> 
                        <Button onClick={this.enableEdit} label={this.state.label}primary={true}> </Button>
                    </Paper>
                </Grid>
            </Grid>
        )
    }

    render(){
        const {classes} = this.props;
        return (
            <div className={classes.root}>
                {this.renderRow()}
                {this.renderRow()}
                {this.renderRow()}
            </div>
        )
    }
}
export default withStyles(Styles)(Board);