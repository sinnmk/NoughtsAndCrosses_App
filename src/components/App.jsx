import React, {Component} from 'react';
import './App.css';
import axios from 'axios';
import {Button} from 'reactstrap'
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';
import Header from './Header/Header'
import Home from './Home/Home'

export default class App extends Component { 
  constructor(props){
    super();
    this.state = {}
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    axios.get('http:localhost:64353/home')
      .then(response => this.setState({}))
  }

  render() {
  return(
    <Router>
      <div className="App">
        <Header/>
        <ul>
            <Link to="/" onClick={Home}><Button size="lg">Home</Button></Link>
        </ul>
        <hr />
          <Route exact path='/' component={Home}/>
      </div>
    </Router>
  )
  }
}
