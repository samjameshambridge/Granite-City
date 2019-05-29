import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import DropdownItem from "components/navigation/dropdown/DropdownItem";

function DropdownList({ inCart }) {
  return (
    <div className="dropdown-product-list">
      {inCart.map(product => {
        return <DropdownItem key={product.id} product={product} />;
      })}
    </div>
  );
}

DropdownList.propTypes = {
  inCart: PropTypes.array.isRequired
};

const mapStateToProps = ({ cart: { inCart } }) => {
  return {
    inCart
  };
};

export default connect(
  mapStateToProps,
  null
)(DropdownList);
