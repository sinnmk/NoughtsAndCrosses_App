import React, { Component } from 'react';
import { withStyles } from '@material-ui/core';
import Styles from './Styles';
import Game from '../Game/Game';

class LandingPage extends Component {

  renderGameSetup(){
    return (
      <div className="landing-page-navigation">
        {/* <div className="landing-page-header"><NavigationTopBar /></div> */}
        <div className="landing-page-body-container">
          <Game/>
        </div>
      </div>
      )
  }

  render() {
      return this.renderGameSetup()
  }
}
export default withStyles(Styles)(LandingPage);