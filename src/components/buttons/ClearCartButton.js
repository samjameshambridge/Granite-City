import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { clearCart } from "actions/cartActions";

function ClearCartButton({ className, clearCart }) {
  return (
    <button className={className} onClick={clearCart}>
      clear cart
    </button>
  );
}

ClearCartButton.propTypes = {
  className: PropTypes.string,
  clearCart: PropTypes.func.isRequired
};

export default connect(
  null,
  {
    clearCart
  }
)(ClearCartButton);
