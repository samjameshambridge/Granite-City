import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { openModal } from "actions/modalActions";
import { detailProduct } from "actions/productActions";

import ProductImage from "components/products/ProductImage";

function ProductCard({
  detailProduct,
  openModal,
  product,
  product: { img, title, price }
}) {
  const modalCtrl = product => {
    detailProduct(product);
    openModal();
  };

  return (
    <div className="col-md-3 col-sm-4 col-6">
      <div
        className="card d-flex flex-column align-items-center text-theme-blue"
        onClick={() => modalCtrl(product)}
      >
        <ProductImage className="w-75" img={img} />
        <div className="card-body">
          <p className="card-title">
            {title} <br />£{price}
          </p>
        </div>
      </div>
    </div>
  );
}

ProductCard.propTypes = {
  currList: PropTypes.string.isRequired,
  detailProduct: PropTypes.func.isRequired,
  openModal: PropTypes.func.isRequired,
  product: PropTypes.shape({
    id: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired
  })
};

const mapStateToProps = ({ products: { currList } }) => {
  return {
    currList
  };
};

export default connect(
  mapStateToProps,
  {
    detailProduct,
    openModal
  }
)(ProductCard);
