import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import renderer from 'react-test-renderer';
import App from './App';
import Header from '../components/Header/Header';
import Home from '../components/Home/Home';
import {Button} from 'reactstrap';
import Game from '../components/Game/Game';
import GameRules from '../components/GameRules/GameRules';
import Signup from '../components/Signup/Signup';

describe('When app renders', () =>{

  test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  test('Link to playGame matches snapshot game', () => {
    const component = renderer.create(
      <Router>
        <div className="App">
          <Header/>
          <ul>
              <Link to="/" onClick={Home}><Button size="lg">Home</Button></Link>
              <Link to="/playgame" onClick={Game}><Button size="lg">Play Game</Button></Link>
              <Link to="/gamerules" onClick={GameRules}><Button size="lg">About Tic-Tac-Toe</Button></Link>
              <Link to="/signup" onClick={Signup}><Button size="lg">Sign Up</Button></Link>
          </ul>
          <hr />
            <Route exact path='/' component={Home}/>
            <Route path='/playgame' component={Game}/>
            <Route path='/gamerules' component={GameRules}/>
            <Route path='/signup' component={Signup}/>
        </div>
      </Router>
    ).toJSON();
    expect(component).toMatchSnapshot();
  })

})
