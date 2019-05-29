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
  product: PropTypes.shape({
    img: PropTypes.string.isRequired
  })
};

ProductImage.defaultProps = {
  className: "",
  onClick: () => void 0
};

export default ProductImage;
