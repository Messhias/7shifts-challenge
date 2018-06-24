import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './css/index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Router } from 'react-router'
import createBrowserHistory from 'history/createBrowserHistory'

const history = createBrowserHistory();
ReactDOM.render(
    <Router history={history}>
        <App history={history}/>
    </Router>
    ,
    document.getElementById('root')
);
registerServiceWorker();
