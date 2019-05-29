import React from 'react';

function CartButtonGroup() {
    return (
        <div>
            <button className="d-block bg-white w-100 text-theme-blue checkout-btn">Checkout</button>
            <p className="text-center mt-3">Or</p>
            <button className="d-block bg-warning w-100 text-primary checkout-btn">Paypal</button>
        </div>
    )
}

export default CartButtonGroup
