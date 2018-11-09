import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import LandingPage from './components/LandingPage/LandingPage'

ReactDOM.render(
        <LandingPage/>,
        document.getElementById('root')
    );

registerServiceWorker();
