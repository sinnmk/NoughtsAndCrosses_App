import React, { Component } from 'react';
import NavigationTopBar from '../NavigationTopBar/Navigation';
import { withStyles } from '@material-ui/core'
import Styles from './Styles';

class LandingPage extends Component {

  render() {
    return (
      <div className="landing-page-navigation">
        <div className="landing-page-header"><NavigationTopBar /></div>
        <div className="landing-page-body-container">

        </div>
      </div>
    )
  }
}
export default withStyles(Styles)(LandingPage);