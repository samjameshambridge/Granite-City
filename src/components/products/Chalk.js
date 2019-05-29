import React from 'react';

import { storeProducts } from 'data';

import ProductCard from 'components/products/ProductCard';

function Chalk() {
    return storeProducts.chalk.map(product => {
        return (
            <ProductCard product={product} key={product.id} />
        )
    })
}

export default Chalk;
