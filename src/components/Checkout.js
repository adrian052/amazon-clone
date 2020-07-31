import React from 'react'
import { useStateValue } from '../context/StateProvider'
import './Checkout.css'
import CheckoutProduct from './CheckoutProduct'
import Subtotal from './Subtotal'


function Checkout() {
    const [{ basket }] = useStateValue()

    return (
        <div className="checkout">
            <div className="checkout__left">

                <img
                    className="checkout__ad"
                    src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
                    alt="ad" />
                {basket?.length === 0 ? (
                    <div>
                        <h2>Your basket is empty</h2>
                        <p>You have no items in your basket, click "add to the basket" next to the item</p>
                    </div>
                ) : (
                        <div>
                            <h2 className="checkout__title">Your shopping basket</h2>
                            {basket.map(({ id, title, image, price, rating }) => (
                                <CheckoutProduct
                                    id={id}
                                    title={title}
                                    image={image}
                                    price={price}
                                    rating={rating} />
                            ))}
                        </div>
                    )}
            </div>
            {basket.length>0?<Subtotal/>:null}
        </div>)
}

export default Checkout
