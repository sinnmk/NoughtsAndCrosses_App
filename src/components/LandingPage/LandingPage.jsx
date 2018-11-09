import React, { Component } from 'react';
import { withStyles } from '@material-ui/core';
import Styles from './Styles';
import NavigationTopBar from '../NavigationTopBar/Navigation';

class LandingPage extends Component {

  render() {
    return (
      <div>
        <div>
          <NavigationTopBar/>
        </div>
      </div>
    )
  }
}
export default withStyles(Styles)(LandingPage);