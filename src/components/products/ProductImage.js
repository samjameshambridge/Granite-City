import React from "react";
import PropTypes from "prop-types";

function ProductImage({ className, img, onClick }) {
  return (
    <img
      src={`${process.env.PUBLIC_URL}/${img}`}
      onClick={onClick}
      className={`img-fluid ${className}`}
      alt="product"
    />
  );
}

ProductImage.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func,
  product: PropTypes.shape({
    img: PropTypes.string.isRequired
  })
};

export default ProductImage;
