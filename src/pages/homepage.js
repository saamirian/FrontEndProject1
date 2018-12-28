import React from 'react'
import menfashion from '../pictures/menfashion.jpg'
import { NavLink } from 'react-router-dom'
import '../style.css'
 

export default function HomepPge(props) {
    return <div>

        <div className='home'><h2>Homepage</h2></div>
        <div className='linkBox'><NavLink to='/categories'>Browse Categories</NavLink>
        <p><NavLink to='/items'>All products</NavLink></p></div>
        <div className='hpic'><NavLink to='/items'><img src={menfashion} /></NavLink></div>

        
         
     </div>
}
