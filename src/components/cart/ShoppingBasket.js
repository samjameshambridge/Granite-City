import React from "react";

import CartColumns from "components/cart/CartColumns";
import CartList from "components/cart/CartList";

function ShoppingBasket() {
  return (
    <div className="shopping-basket text-theme-blue basket-container">
      <CartColumns />
      <CartList />
    </div>
  );
}

export default ShoppingBasket;
