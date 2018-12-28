import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Appapp from './appapp';
import { Provider } from 'react-redux';
import { createStore} from 'redux';
import './style.css';
import { BrowserRouter } from 'react-router-dom';
import reducers from './reducers';
 
const napp = 
    <BrowserRouter> 
        <Appapp />
    </BrowserRouter>
const nnapp = 
<Provider store={createStore(reducers) }>
    <Appapp />
</Provider>

ReactDOM.render(napp, document.getElementById('app'));

