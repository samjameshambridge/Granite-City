import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { setProducts } from "actions/productActions";

import NavBar from "components/navigation/NavBar";
import Title from "components/general/Title";
import ProductList from "components/products/ProductList";
import StoreButton from "components/buttons/StoreButton";
import StoreModal from "components/modals/StoreModal";

class Store extends Component {
  activeButton = newProducts => {
    const activeButton = [...document.querySelectorAll("button")].filter(
      button => button.getAttribute("data-type") === newProducts
    );

    activeButton[0].style.fontSize = "1.25rem";
    activeButton[0].style.color = "black";
  };

  changeProductList = e => {
    const { setProducts } = this.props;

    this.deactivateButtons();
    const newProducts = e.target.getAttribute("data-type");
    this.activeButton(newProducts);
    setProducts(newProducts);
  };

  componentWillMount() {
    const { setProducts } = this.props;

    setProducts("shoes");
  }

  deactivateButtons = () => {
    document.querySelectorAll("button").forEach(button => {
      button.style.fontSize = "1rem";
      button.style.color = "grey";
    });
  };

  render() {
    const { modalOpen } = this.props;

    let component;
    if (modalOpen) component = <StoreModal />;

    return (
      <React.Fragment>
        <NavBar />
        {component}
        <Title title="buy your gear" className="store-title" />
        <div className="container">
          <StoreButton
            onClick={this.changeProductList}
            dataType="shoes"
            className="active-btn"
            value="Shoes"
          />
          <StoreButton
            onClick={this.changeProductList}
            dataType="chalk"
            className="store-btn"
            value="Chalk Bags/ Chalk"
          />
          <StoreButton
            onClick={this.changeProductList}
            dataType="extras"
            className="store-btn"
            value="Extras"
          />
          <ProductList />
        </div>
      </React.Fragment>
    );
  }
}

Store.propTypes = {
  modalOpen: PropTypes.bool.isRequired,
  setProducts: PropTypes.func.isRequired
};

const mapStateToProps = ({ modal: { modalOpen } }) => {
  return {
    modalOpen
  };
};

export default connect(
  mapStateToProps,
  {
    setProducts
  }
)(Store);
