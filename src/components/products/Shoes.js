import React from 'react';

import { storeProducts } from 'data';

import ProductCard from 'components/products/ProductCard';

function Shoes() {
    return storeProducts.shoes.map(product => {
        return (
            <ProductCard product={product} key={product.id} />
        )
    }
    );
}

export default Shoes;