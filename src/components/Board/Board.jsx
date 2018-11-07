import React, {Component} from 'react';
import {Paper, Grid, Button, withStyles} from '@material-ui/core';
import Styles from './BoardStyles';
import PropTypes from 'prop-types';
import $ from 'jquery';

class Board extends Component {

    static propTypes = {
        name: PropTypes.string,
    }

    constructor(props){
        super(props);
        this.props = props;
        this.state = 
            {isToggleOn: true};
            //not sure if this is what I want
            // BoardDimension: null,
            // IsTerminal: false,
            // BoardState: false
        this.handleClick = this.handleClick.bind(this);
    };

    renderBoard(){

    }

    componentWillReceiveProps(){
        if(this.props.boardState !== nextProps.boardState){
            this.renderBoard(nextProps.boardState);
        }
    }

    initialBoardState(BoardDimension){
        var boardState = []
        for (var i = 0; i < BoardDimension*BoardDimension; i++){
            boardState.append("");
        }
        return boardState;
    }

    handleClick(){
        this.setState(state => ({
            isToggleOn: !state.isToggleOn
        }))
    }

    render(){
        return (
        <table>
            <tr>
                <td><button onclick={this.handleClick}>{this.state.isToggleOn ? 'X' : 'O'}</button></td>
                <td><button onclick={this.handleClick}>{this.state.isToggleOn ? 'X' : 'O'}</button></td>
                <td><button onclick={this.handleClick}>{this.state.isToggleOn ? 'X' : 'O'}</button></td>
            </tr>
            <tr>
                <td><button onclick={this.handleClick}>{this.state.isToggleOn ? 'X' : 'O'}</button></td>
                <td><button onclick={this.handleClick}>{this.state.isToggleOn ? 'X' : 'O'}</button></td>
                <td><button onclick={this.handleClick}>{this.state.isToggleOn ? 'X' : 'O'}</button></td>
            </tr>
            <tr>
                <td><button onclick={this.handleClick}>{this.state.isToggleOn ? 'X' : 'O'}</button></td>
                <td><button onclick={this.handleClick}>{this.state.isToggleOn ? 'X' : 'O'}</button></td>
                <td><button onclick={this.handleClick}>{this.state.isToggleOn ? 'X' : 'O'}</button></td>
            </tr>
        </table>
        )}

    createBoard(){
        return $.ajax({
            method: "POST", 
            url: 'http://localhost:9000/board',
            data: JSON.stringify(this.state),
            contentType: "application/json"
        }).done(function(data){
            console.log('success', data)
        }).fail(function(xhr){
            console.log('error', xhr)
        });
    }
}
export default withStyles(Styles)(Board);