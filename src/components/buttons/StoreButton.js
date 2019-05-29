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
  dataType: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired
};

StoreButton.defaultProps = {
  className: "",
  onClick: () => void 0
};

export default StoreButton;
