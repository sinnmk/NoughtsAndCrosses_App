import React, { Component } from 'react';
import NavigationTopBar from '../NavigationTopBar/Navigation';
import './LandingPage.css';

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
export default LandingPage;