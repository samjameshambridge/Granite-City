import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { closeModal } from "actions/modalActions";

import ModalHead from "components/modals/ModalHead";
import ModalInfo from "components/modals/ModalInfo";
import ModalButton from "components/buttons/ModalButton";
import CloseButton from "components/buttons/CloseButton";

function CheckoutModal({ closeModal }) {
  useEffect(() => {
    document.addEventListener("click", function clickClose(e) {
      if (e.target.contains(document.querySelector("#modalContainer")))
        closeModal();

      document.removeEventListener("click", clickClose);
    });
  });

  return (
    <div className="checkout-modal position-fixed">
      <div
        className="modal-container position-fixed d-flex flex-column"
        id="modalContainer"
      >
        <CloseButton />
        <div className="d-flex flex-column align-items-center justify-content-evenly h-100">
          <ModalHead />
          <ModalInfo />
          <div className="d-flex justify-content-center w-100">
            <ModalButton onClick={closeModal} value="Close" />
          </div>
        </div>
      </div>
    </div>
  );
}

CheckoutModal.propTypes = {
  closeModal: PropTypes.func.isRequired
};

const mapStateToProps = ({ products: { detailProduct } }) => {
  return {
    detailProduct
  };
};

export default connect(
  mapStateToProps,
  {
    closeModal
  }
)(CheckoutModal);
