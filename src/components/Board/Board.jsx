import React, {Component} from 'react';
import {Paper, Grid, Button, withStyles} from '@material-ui/core';
import Styles from './BoardStyles';
import PropTypes from 'prop-types';
import axios from 'axios';

class Board extends Component {

    static propTypes = {
        name: PropTypes.string,
    }

    constructor(props){
        super(props);
        this.props = props;
        this.state = {
            boardData: []       
        };
    }
    enableEdit(){
        this.setState({
            disabled: !this.state.disabled,
            label: "X"
        })
    }

    componentDidMount(){
        axios.get("http://localhost:9000/board").then(response => {
            console.log(response.data);
            this.setState({
                boardData: response.data
            })
        })
    }

    render(){
        return (
           <div>{this.state.boardData}</div> 
        )
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
    // render(){
    //     return this.CreateBoard()
        // const {classes} = this.props;
        // return (
        //     <div className={classes.root}>
        //         {this.renderRow()}
        //         {this.renderRow()}
        //         {this.renderRow()}
        //     </div>
        // )
    // }
}
export default withStyles(Styles)(Board);