import React from 'react';
import { NavLink } from 'react-router-dom';
import '../style.css';
import { Provider } from 'react-redux';
import { createStore} from 'redux';
import { BrowserRouter } from 'react-router-dom';
import reducers from '../reducers';
import App from '../components/list/App'
 

export default function productPage(props) {
    return <div>
        
        <div><h2>frtr</h2></div>
        <div className='linkBox'><NavLink to='/categories'>Browse Categories</NavLink></div>
        <Provider store={createStore(reducers) }>
             <App />
        </Provider>

        
         
     </div>
}

