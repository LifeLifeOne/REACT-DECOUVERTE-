import React from 'react'
import product from '../Datas/productList.js'
import '../css/product.css'

function addToCart(name) {
    alert(`Vous venez d'ajouter le produit "${name}" à votre panier`);
}

const ItemProduct = (props) => {

    const product = props.product || {}


    return (
        <div key={product.id} className='card-product'>
            <ul>
                <li>
                    <img className='product-img' src={product.image} alt={product.name} />
                    <hr />
                    <h3><i class="fas fa-tag"> </i> {product.name}</h3>
                    <span><i>Prix: {product.price} €</i></span>
                    <button className='btn' onClick={() => addToCart(product.name)}>Ajouter au panier</button>
                    <span className='product-stock'><i className="fas fa-circle"> </i> {product.quantity > 0 ? 'En stock' : 'Rupture de stock'}</span>
                </li >
            </ul>
        </div >
    )
}

export default ItemProduct
