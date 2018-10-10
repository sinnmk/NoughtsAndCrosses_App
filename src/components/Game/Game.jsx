import { Component } from 'react';
import GameTemplate from './GameTemplate'; 

export default class Game extends Component {
    constructor (props) {
        super(props);
        this.onRadioBtnClick = this.onRadioBtnClick.bind(this);
      }

    componentDidMount(){
        fetch('https://localhost:64353')
        .then(results => {
            return results.json();
        }).then(data => {
            let signIn = data.results.map((form) => {
            })
        })
        this.setState({})
    }
    onRadioBtnClick(rSelected) {
      this.setState({ rSelected });
    }
    render() {
      return GameTemplate.call(this);
    }
  }