import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import NavBar from "components/navigation/NavBar";
import CheckoutModal from "components/modals/CheckoutModal";
import EmptyCart from "components/cart/EmptyCart";
import ShoppingBasket from "components/cart/ShoppingBasket";
import ClearCartButton from "components/buttons/ClearCartButton";
import PurchaseButton from "components/buttons/PurchaseButton";
import CartTotals from "components/cart/CartTotals";

function Checkout({ inCart, modalOpen }) {
  let checkoutModal;

  if (!inCart.length) {
    return <EmptyCart />;
  } else {
    if (modalOpen) checkoutModal = <CheckoutModal />;
  }

  return (
    <React.Fragment>
      <NavBar />
      {checkoutModal}
      <div className="checkout-container">
        <div className="row">
          <div className="basket-column col-lg-6 d-flex flex-column align-items-center">
            <h2 className="basket-title text-center text-theme-blue">
              shopping basket
            </h2>
            <ShoppingBasket />
            <ClearCartButton className="bg-theme-cyan text-theme-blue" />
          </div>
          <div className="d-none d-lg-block col-2 dotted-border" />
          <div className="summary-column col-lg-3 d-lg-flex flex-column align-items-center">
            <h2 className="summary-title text-center text-theme-blue">
              summary
            </h2>
            <CartTotals />
            <div className="checkout-button-group text-center">
              <PurchaseButton className="bg-theme-yellow" value="paypal" />
              <p className="text-theme-blue">Or</p>
              <PurchaseButton
                className="bg-theme-purple text-theme-blue"
                value="checkout"
              />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

Checkout.propTypes = {
  inCart: PropTypes.array.isRequired,
  modalOpen: PropTypes.bool.isRequired
};

const mapStateToProps = ({ cart: { inCart }, modal: { modalOpen } }) => {
  return {
    inCart,
    modalOpen
  };
};

export default connect(
  mapStateToProps,
  null
)(Checkout);
