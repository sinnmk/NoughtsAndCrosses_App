import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import LandingPage from './components/LandingPage/LandingPage'
import repositoryReducer from './store/reducers/repositoryReducer';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

const store = createStore(repositoryReducer, applyMiddleware(thunk));

ReactDOM.render(
        <Provider store={store}> 
            <LandingPage/>
        </Provider>, 
        document.getElementById('root')
    );

registerServiceWorker();
