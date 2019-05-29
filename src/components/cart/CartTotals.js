import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { sumCartTotal } from "actions/cartActions";

function CartTotals({ cartTotal, inCart, sumCartTotal }) {
  sumCartTotal(inCart);

  return (
    <React.Fragment>
      <div className="subtotal-container text theme-blue">
        <p>Subtotal: £{cartTotal}</p>
        <p>Tax: £{(cartTotal * 0.2).toFixed(2)}</p>
      </div>
      <p className="checkout-total text-theme-blue">
        Total: £
        {(parseFloat(cartTotal) + parseFloat(cartTotal * 0.2)).toFixed(2)}
      </p>
    </React.Fragment>
  );
}

const mapStateToProps = ({ cart: { cartTotal, inCart } }) => {
  return {
    cartTotal,
    inCart
  };
};

CartTotals.propTypes = {
  cartTotal: PropTypes.string.isRequired,
  inCart: PropTypes.array.isRequired,
  sumCartTotal: PropTypes.func.isRequired
};

export default connect(
  mapStateToProps,
  {
    sumCartTotal
  }
)(CartTotals);
