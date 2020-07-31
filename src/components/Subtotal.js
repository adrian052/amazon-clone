import React from 'react'
import './Subtotal.css'
import CurrencyFormat from 'react-currency-format'
import { useStateValue } from '../context/StateProvider'
import { getBasketTotal } from '../context/reducer'
 
function Subtotal() {
    const [{ basket }] = useStateValue()

    return (
        <div className="subtotal">
            <CurrencyFormat
            renderText = {(value)=>(
                <>
                <p>
                    Subtotal ({basket.length} items):<strong></strong>
                </p>
                <small className="subtotal_gift">
                    <input type="checkbox"/> This order contains a gift <strong>{` ${value}`}</strong>
                </small>
                </>
            )}
            decimalScale={2}
            value={getBasketTotal(basket)}
            displayType={"text"}
            thousandSeparator={true}
            prefix={"$"}
            />
            <button> Proceed to checkout</button>
        </div>
    )
}

export default Subtotal
