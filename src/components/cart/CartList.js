import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import CartItem from "components/cart/CartItem";

function CartList({ inCart }) {
  return (
    <div className="cart-list">
      {inCart.map(product => {
        return <CartItem key={product.id} product={product} />;
      })}
    </div>
  );
}

CartList.propTypes = {
  inCart: PropTypes.array.isRequired
};

const mapStateToProps = ({ cart: { inCart } }) => {
  return {
    inCart
  };
};

export default connect(
  mapStateToProps,
  null
)(CartList);
