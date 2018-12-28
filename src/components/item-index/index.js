import React from 'react'
import ProductListItem from './product-list-item'

export default function Items(props) {
    return <div className='product-listing'>
    {
        props.items.map( item =>
            <ProductListItem item={item} />)
    }
</div>
}