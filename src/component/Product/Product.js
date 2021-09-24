import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Product.css'

const Product = (props) => {
    // console.log(props)
    const { name, img, seller, price, stock } = props.product;
    const element = <FontAwesomeIcon icon={faShoppingCart} />;
    return (
        <div className='product'>
            <div className='p-img'>
                <img src={img} alt="" />
            </div>
            <div className='p-details'>
                <h1>product: {name}</h1>
                <p><small>By: {seller}</small></p>
                <p>Price {price}</p>
                <p>only {stock} left in stock - order soo</p>
                <button
                    onClick={() => props.handleAddToCart(props.product)}
                    className='btn-regular'
                >{element} Add to cart</button>
            </div>
        </div>
    );
};

export default Product;