import React from 'react';
import {Button} from 'reactstrap'
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';
import Header from '../components/Header/Header';
import Home from '../components/Home/Home';
import Signup from '../components/SignUp/SignUp';
import Signin from '../components/SignIn/SignIn';
import GameRules from '../components/GameRules/GameRules';
import Game from '../components/Game/Game';

const AppTemplate = () =>{
  return(
    <Router>
      <div className="App">
        <Header/>
        <ul>
            <Link to="/" onClick={Home}><Button size="lg">Home</Button></Link>
            <Link to="/playgame" onClick={Game}><Button size="lg">Play Game</Button></Link>
            <Link to="/gamerules" onClick={GameRules}><Button size="lg">About Tic-Tac-Toe</Button></Link>
            <Link to="/signup" onClick={Signup}><Button size="lg">Sign Up</Button></Link>
            <Link to="/signin" onClick={Signin}><Button size="lg">Sign In</Button></Link>
        </ul>
        <hr />
          <Route exact path='/' component={Home}/>
          <Route path='/playgame' component={Game}/>
          <Route path='/gamerules' component={GameRules}/>
          <Route path='/signup' component={Signup}/>
          <Route path='/signin' component={Signin}/>
      </div>
    </Router>
  )
}
export default AppTemplate;