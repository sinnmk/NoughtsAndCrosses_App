import {Component} from 'react';
import AppTemplate from './AppTemplate';
import './App.css';
import Axios from 'axios';

export default class App extends Component { 
  constructor(props){
    super(props);
    this.state = {};
  }

  render() {
    return AppTemplate.call(this);
  }

  componentDidMount(){
    Axios.get(`http:localhost:52718/home`)
    .then(response =>{
      this.setState({
        content: response.data.App
      }) 
    })
  }
}
