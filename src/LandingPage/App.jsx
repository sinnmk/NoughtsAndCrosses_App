import React, {Component} from 'react';
import AppTemplate from './AppTemplate';
import './App.css';

export default class App extends Component { 
  constructor(props){
    super(props);
    this.state = {};
  }

  render() {
    return AppTemplate.call(this);
  }
}
