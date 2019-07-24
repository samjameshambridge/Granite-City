import React from "react";
import PropTypes from "prop-types";

function StoreButton({ className, dataType, onClick, value }) {
  return (
    <button className={className} data-type={dataType} onClick={onClick}>
      {value}
    </button>
  );
}

StoreButton.propTypes = {
  className: PropTypes.string,
  dataType: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  value: PropTypes.string.isRequired
};

export default StoreButton;
