import React from 'react'
import './CheckoutProduct.css'
import { useStateValue } from '../context/StateProvider'

function CheckoutProduct({ id, title, price, image, rating }) {
    const[{basket},dispatch] =useStateValue();


    const removeFromBasket = () => {
        dispatch({
            type:'REMOVE_FROM_BASKET',
            id:id
        })
    }
    return (
        <div className="checkoutProduct">
            <img src={image} alt="" className="checkoutProduct__image" />
            <div className="checkoutProduct__info">
                <p className="checkoutProduct__title">{title}</p>
                <p className="checkoutProduct__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="checkoutProduct__rating">
                    {Array(rating).fill().map((_,i)=>(<p>⭐</p>))}
                </div>
                <button onClick={removeFromBasket}>Remove from the basket</button>
            </div>
        </div>
    )
}

export default CheckoutProduct
