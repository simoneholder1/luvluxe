import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App.js';
// import registerServiceWorker from './registerServiceWorker';
import {HashRouter, Route} from 'react-router-dom';
import {Provider} from 'react-redux';
import store from './ducks/store';

ReactDOM.render(

<Provider store={store}>
<HashRouter>
    <Route path="/" component={App} />
</HashRouter>    
</Provider>
, document.getElementById('root'));
// registerServiceWorker();
