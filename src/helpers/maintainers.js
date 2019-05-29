export const maintainer = (product, action) => {
    if (action === "add" || action === "inc") product.quantity++;
    else if (action === "dec") product.quantity--;

    product.total = (product.price * product.quantity).toFixed(2);

    return product;
}

export const newSizeMaintainer = (product, size) => {
    const newShoe = Object.assign({}, product);

    newShoe.size = size;
    newShoe.id = product.title + size;
    newShoe.quantity++;
    newShoe.total = (newShoe.price * newShoe.quantity).toFixed(2);

    return newShoe;
}

