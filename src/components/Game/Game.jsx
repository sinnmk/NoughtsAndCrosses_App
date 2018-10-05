import { Component } from 'react';
import GameTemplate from './GameTemplate'; 

export default class Game extends Component {
    constructor (props) {
        super(props);
        this.onRadioBtnClick = this.onRadioBtnClick.bind(this);
      }
    
      onRadioBtnClick(rSelected) {
        this.setState({ rSelected });
      }
    
      render() {
        return GameTemplate.call(this);
      }
    }