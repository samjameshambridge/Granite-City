import React from "react";
import PropTypes from "prop-types";

function PurchaseButton({ className, value }) {
  const onClickHandler = () => {
    window.alert(
      "Checkout for these items is not currently available (because they don't exist!). But thanks for trying!"
    );
  };

  return (
    <button className={className} onClick={onClickHandler}>
      {value}
    </button>
  );
}

PurchaseButton.propTypes = {
  value: PropTypes.string.isRequired
};

PurchaseButton.defaultProps = {
  className: ""
};

export default PurchaseButton;
