import React from 'react'
import '../css/cart.css'

const Cart = () => {

    const articles = [
        { id: 1, name: 'Adidas', price: 95 },
        { id: 2, name: 'Timberland', price: 120 },
        { id: 3, name: 'Nike', price: 100 },
    ];

    const output = articles.map((article) =>
        <li key={article.id}>
            {article.name}
            <i> {article.price} €</i>
        </li >
    );

    let sum = 0;
    for (let i = 0; i < articles.length; i++) {
        sum += parseInt(articles[i].price);
    }

    const total = `Total: ${sum} €`;

    return (
        <div className='cart'>
            <i class="fas fa-shopping-cart"></i>
            {/* <ul>
                {output}
            </ul>
            <div>{total}</div> */}
        </div>
    )
}

export default Cart
