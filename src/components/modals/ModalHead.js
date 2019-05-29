import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import Title from "components/general/Title";
import ProductImage from "components/products/ProductImage";

function ModalHead({ detailProduct: { img, price, title } }) {
  return (
    <React.Fragment>
      <ProductImage className="modal-img" img={img} />
      <Title title={title} className="text-center mt-4" />
      <p className="lead text-theme-blue">£{price}</p>
    </React.Fragment>
  );
}

ModalHead.propTypes = {
  detailProduct: PropTypes.shape({
    img: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired
  })
};

const mapStateToProps = ({ products: { detailProduct } }) => {
  return {
    detailProduct
  };
};

export default connect(
  mapStateToProps,
  null
)(ModalHead);
