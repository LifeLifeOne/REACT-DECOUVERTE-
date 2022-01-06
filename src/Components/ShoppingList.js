import React from 'react'
import ItemProduct from './ItemProduct.js'
import products from '../Datas/productList.js'

const ShoppingList = () => {

    const list = products.map((element) =>
        <ItemProduct product={element} />
    )

    return (
        <div className='product-wrapper'>
            <h2><i class="fas fa-shoe-prints"> </i> Liste de nos produits</h2>
            <hr />
            <div className='product-flex'>
                {list}
            </div>
        </div>
    )
}

export default ShoppingList
