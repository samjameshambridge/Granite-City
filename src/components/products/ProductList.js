import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import Shoes from "components/products/Shoes";
import Chalk from "components/products/Chalk";
import Extras from "components/products/Extras";

function ProductList({ currList }) {
  let component;

  switch (currList) {
    case "shoes":
      component = <Shoes />;
      break;
    case "chalk":
      component = <Chalk />;
      break;
    case "extras":
      component = <Extras />;
      break;
    default:
      component = <Shoes />;
  }

  return <div className="row">{component}</div>;
}

ProductList.propTypes = {
  currList: PropTypes.string.isRequired
};

const mapStateToProps = ({ products: { currList } }) => {
  return {
    currList
  };
};

export default connect(
  mapStateToProps,
  null
)(ProductList);
