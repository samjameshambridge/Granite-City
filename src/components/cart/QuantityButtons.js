import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

// custom maintainer ensures product quantity in json file is appropriately changed
import { maintainer } from "helpers/maintainers";
import { decrementItem, incrementItem } from "actions/cartActions";

function QuantityButtons({
  decrementItem,
  incrementItem,
  product,
  product: { quantity }
}) {
  return (
    <div className="d-none d-lg-flex justify-content-center">
      <button
        className="quantity-button text-theme-blue"
        onClick={() => decrementItem(maintainer(product, "dec"))}
      >
        -
      </button>
      <span className="text-theme-blue mx-1">{quantity}</span>
      <button
        className="plus quantity-button text-theme-blue"
        onClick={() => incrementItem(maintainer(product, "inc"))}
        value="+"
      >
        +
      </button>
    </div>
  );
}

QuantityButtons.propTypes = {
  decrementItem: PropTypes.func.isRequired,
  incrementItem: PropTypes.func.isRequired,
  product: PropTypes.shape({
    quantity: PropTypes.number.isRequired
  })
};

const mapStateToProps = ({ cart: { inCart } }) => {
  return {
    inCart
  };
};

export default connect(
  mapStateToProps,
  {
    decrementItem,
    incrementItem
  }
)(QuantityButtons);
