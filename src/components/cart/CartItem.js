import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { deleteFromCart } from "actions/cartActions";
import { detailProduct } from "actions/productActions";
import { openModal } from "actions/modalActions";

import ProductImage from "components/products/ProductImage";
import QuantityButtons from "./QuantityButtons";

function CartItem({
  currList,
  deleteFromCart,
  detailProduct,
  openModal,
  product,
  product: { img, price, size, title }
}) {
  const imgClickHandler = product => {
    detailProduct(product, currList);
    openModal();
  };

  return (
    <div className="cart-item row w-100">
      <div className="col-1 d-flex align-items-center">
        <i className="fas fa-times" onClick={() => deleteFromCart(product)} />
      </div>
      <div className="col-3 d-flex align-items-center p-0">
        <ProductImage
          onClick={() => imgClickHandler(product)}
          className="product-image"
          img={img}
        />
      </div>
      <div className="col-5 d-flex flex-column justify-content-center text-center">
        <p className="cart-item-title">{title}</p>
        {size ? <p className="text-08">(Size {size})</p> : null}
      </div>
      <div className="col-md-3 col-2 d-flex flex-column justify-content-center text-center">
        <p className="cart-item-price">£{price}</p>
        <QuantityButtons product={product} />
      </div>
    </div>
  );
}

CartItem.propTypes = {
  currList: PropTypes.string.isRequired,
  detailProduct: PropTypes.func.isRequired,
  openModal: PropTypes.func.isRequired,
  product: PropTypes.shape({
    img: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired
  })
};

CartItem.defaultProps = {
  product: PropTypes.shape({
    size: null
  })
};

const mapStateToProps = ({
  cart: { inCart },
  products: { currList, detailProduct }
}) => {
  return {
    currList,
    detailProduct,
    inCart
  };
};

export default connect(
  mapStateToProps,
  {
    deleteFromCart,
    detailProduct,
    openModal
  }
)(CartItem);
