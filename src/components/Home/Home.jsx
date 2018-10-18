import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

export default class Home extends Component{

    render(){
        return(
            <div>
                <Grid container spacing={24}>
                    <Grid item xs={12}>
                    Hello
                    </Grid>
                </Grid>

            </div>
        )}; 
    }