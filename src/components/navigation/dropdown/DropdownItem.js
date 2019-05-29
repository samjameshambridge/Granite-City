import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { deleteFromCart } from "actions/cartActions";

import ProductImage from "components/products/ProductImage";

function DropdownItem({
  product,
  product: { img, quantity, title, total },
  deleteFromCart
}) {
  return (
    <div className="dropdown-product row m-0 w-100 py-2">
      <div className="col-4 text-center">
        <ProductImage className="dropdown-img" img={img} />
      </div>
      <div className="col-6 p-0 d-flex flex-column justify-content-center text-theme-blue">
        <p className="mb-0 text-left">{title}</p>
        <p className="text-muted m-0">£{total}</p>
      </div>
      <div className="col-2 d-flex align-items-center text-theme-blue">
        <p className="mt-3">x{quantity}</p>
        <i
          className="fas fa-trash text-light-grey ml-2"
          onClick={() => deleteFromCart(product)}
        />
      </div>
    </div>
  );
}

DropdownItem.propTypes = {
  product: PropTypes.shape({
    img: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    total: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired
  })
};

const mapStateToProps = ({ cart }) => {
  return {
    inCart: cart.inCart
  };
};

export default connect(
  mapStateToProps,
  {
    deleteFromCart
  }
)(DropdownItem);
