import React from 'react';

function CartColumns() {
    return (
        <div className="product-info row">
            <div className="col-4 d-none d-md-block"></div>
            <div className="product-title col-5 d-none d-md-block">
                <p className="text-center">Product</p>
            </div>
            <div className="price-title col-3 d-none d-md-block text-center">
                <span className="font-secondary">Price/Quantity</span>
            </div>
        </div>
    )
}

export default CartColumns;
