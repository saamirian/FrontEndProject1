import React from 'react'

export default function ProductListItem(props) {
    return <div className='product-list-item'>
        <h3>{ props.item.name }</h3>
        
       <div classNmae='product-image'><img 
                height ={100}
                title={ props.name}
                src={props.item.image}/></div>
                <div className='product-info'>
                    <h6>Description:{props.item.description}</h6>
                     <h6>Price: ${props.item.price}</h6>
                </div>
                <div><button>Buy</button> </div>
        
        </div>
}
