import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
import Router from './router'
import './style.css'

const Navigation = (props) => <nav>
    <ul>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/items'>Product List</NavLink></li>
        <li><NavLink to='/categories'>Categories</NavLink></li>
    </ul>
</nav>

class Appapp extends React.Component {
    render() {
        return <div className='page-container'>
        <div className='header'>
            <h1>My First FrontEnd Exprience</h1>
        </div>
            <Navigation />
            <Router />
        </div>
        
    }
}
export default Appapp;