import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import Demo from './components/demo'

ReactDOM.render(<Demo />, document.getElementById('root'));
registerServiceWorker();
