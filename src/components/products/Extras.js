import React from 'react';

import { storeProducts } from 'data';

import ProductCard from 'components/products/ProductCard';

function Extras() {
    return storeProducts.extras.map(product => {
        return (
            <ProductCard product={product} key={product.id} />
        )
    })
}

export default Extras;
