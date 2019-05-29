import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { closeModal } from "actions/modalActions";

function CloseButton({ closeModal }) {
  return (
    <i
      className="close-X position-fixed fas fa-times align-self-end text-muted"
      onClick={closeModal}
    />
  );
}

CloseButton.propTypes = {
  closeModal: PropTypes.func.isRequired
};

export default connect(
  null,
  {
    closeModal
  }
)(CloseButton);
