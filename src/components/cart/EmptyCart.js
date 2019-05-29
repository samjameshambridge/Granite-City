import React from "react";

import NavBar from "components/navigation/NavBar";
import Title from "components//general/Title";

function EmptyCart() {
  return (
    <React.Fragment>
      <NavBar />
      <div className="empty-cart-container">
        <Title title="Your Cart is currently empty!" />
      </div>
    </React.Fragment>
  );
}

export default EmptyCart;
