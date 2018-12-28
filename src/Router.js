import React from 'react';
import { Switch, Route } from 'react-router-dom'
import HomePage from './pages/homepage'
import ItemPage from './pages/itempage'
import categoriesPage from './pages/categoriesPage'
import productPage from './pages/productPage'

const Router = () => (
    <Switch>
        <Route exact path='/' component ={HomePage} />
        <Route exact path='/items' component ={ItemPage} />
        <Route exact path='/categories' component ={categoriesPage} />
        <Route exact path='/product' component ={productPage} />
        
    </Switch>
)
export default Router;