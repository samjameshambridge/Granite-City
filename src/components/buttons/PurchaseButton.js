import React from "react";
import PropTypes from "prop-types";

function PurchaseButton({ className, value }) {
  const onClickHandler = () => {
    // just a little notice to show I havent implemented a payment gateway
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
  className: PropTypes.string,
  value: PropTypes.string.isRequired
};

export default PurchaseButton;
