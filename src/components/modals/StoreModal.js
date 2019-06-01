import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { closeModal } from "actions/modalActions";
import { addToCart } from "actions/cartActions";
import { maintainer, newSizeMaintainer } from "helpers/maintainers";

import ModalHead from "components/modals/ModalHead";
import SizeOptions from "components/modals/SizeOptions";
import ModalInfo from "components/modals/ModalInfo";
import ModalButton from "components/buttons/ModalButton";
import CloseButton from "components/buttons/CloseButton";

function StoreModal({ addToCart, closeModal, detailProduct, inCart }) {
  function addCtrl() {
    if (detailProduct.type === "shoe") {
      const newSize = document.querySelector("select").value,
        existingProduct = inCart.filter(
          product =>
            product.title === detailProduct.title && product.size === newSize
        );

      // if no item with same title AND same size
      if (!existingProduct.length) {
        addToCart(newSizeMaintainer(detailProduct, newSize));
      } else {
        // if there is an item with same name AND same size
        addToCart(maintainer(existingProduct[0], "add"));
      }
    } else {
      addToCart(maintainer(detailProduct, "add"));
    }

    closeModal();
  }

  useEffect(() => {
    document.addEventListener("click", function clickClose(e) {
      if (e.target.contains(document.querySelector(".modal-container")))
        closeModal();

      document.removeEventListener("click", clickClose);
    });
  });

  return (
    <div className="store-modal position-fixed">
      <div className="modal-container position-fixed d-flex flex-column">
        <CloseButton />
        <div className="h-100 d-flex flex-column align-items-center justify-content-evenly">
          <ModalHead />
          {detailProduct.size || detailProduct.size === 0 ? (
            <SizeOptions />
          ) : null}
          <ModalInfo />
          <ModalButton onClick={addCtrl} value="Add to Cart" />
        </div>
      </div>
    </div>
  );
}

StoreModal.propTypes = {
  addToCart: PropTypes.func.isRequired,
  closeModal: PropTypes.func.isRequired,
  detailProduct: PropTypes.shape({
    title: PropTypes.string.isRequired
  }),
  inCart: PropTypes.array.isRequired
};

const mapStateToProps = ({ products: { detailProduct }, cart: { inCart } }) => {
  return {
    detailProduct,
    inCart
  };
};

export default connect(
  mapStateToProps,
  {
    addToCart,
    closeModal
  }
)(StoreModal);
