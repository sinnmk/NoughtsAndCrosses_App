import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import LandingPage from './components/LandingPage/LandingPage'
import Board from './components/Board/Board';

ReactDOM.render(
        // <Board/>,
        <LandingPage/>,
        document.getElementById('root')
    );

registerServiceWorker();
