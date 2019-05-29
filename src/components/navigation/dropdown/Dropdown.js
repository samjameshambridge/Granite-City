import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { sumCartTotal } from "actions/cartActions";

import DropdownList from "components/navigation/dropdown/DropdownList";
import PurchaseButton from "components/buttons/PurchaseButton";

function Dropdown({ cartTotal, inCart, sumCartTotal }) {
  sumCartTotal(inCart);

  return (
    <div className="dropdown-container">
      <DropdownList />
      <p className="dropdown-total my-3 text-theme-blue">Total: £{cartTotal}</p>
      <PurchaseButton
        className="dropdown-button-checkout d-block mb-3 bg-theme-yellow text-theme-blue text-center"
        value="Checkout"
      />
      <Link
        to="/store/checkout"
        className="dropdown-button-cart d-block bg-theme-purple text-theme-blue text-center"
      >
        View Cart
      </Link>
    </div>
  );
}

Dropdown.propTypes = {
  inCart: PropTypes.array.isRequired,
  sumCartTotal: PropTypes.func.isRequired
};

Dropdown.defaultProps = {
  cartTotal: 0
};

const mapStateToProps = ({ cart: { cartTotal, inCart } }) => {
  return {
    cartTotal,
    inCart
  };
};

export default connect(
  mapStateToProps,
  {
    sumCartTotal
  }
)(Dropdown);
