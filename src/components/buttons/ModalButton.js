import React from "react";
import PropTypes from "prop-types";

function ModalButton({ onClick, value }) {
  return (
    <button className="modal-button text-theme-blue" onClick={onClick}>
      {value}
    </button>
  );
}

ModalButton.propTypes = {
  onClick: PropTypes.func,
  value: PropTypes.string.isRequired
};

export default ModalButton;
