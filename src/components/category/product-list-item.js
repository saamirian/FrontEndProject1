import React from 'react'
import { NavLink } from 'react-router-dom'

export default function ProductListItem(props) {
    return <div className='product-list-item'>
        <h3>Name: { props.item.name }</h3>
        
            <div className='product-info'>
            <h6>ID : {props.item.id}</h6></div>
            <div><NavLink to='/items'>Items</NavLink></div>
        
        </div>
}
