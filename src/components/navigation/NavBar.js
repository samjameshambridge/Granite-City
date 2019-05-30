import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import Logo from "components/general/Logo";
import NavItem from "components/navigation/NavItem";
import Dropdown from "components/navigation/dropdown/Dropdown";

function NavBar({ inCart }) {
  return (
    <React.Fragment>
      <nav className="navbar navbar-expand-sm d-flex">
        <Link to="/Granite-City/" className="navbar-brand d-none d-sm-block">
          <Logo className="nav-logo" />
        </Link>
        <button
          className="navbar-toggler btn-block text-theme-blue"
          type="button"
          data-toggle="collapse"
          data-target="#collapsibleNavbar"
        >
          <i className="fas fa-bars fa-2x" />
        </button>
        <div
          className="ul-container text-center collapse navbar-collapse"
          id="collapsibleNavbar"
        >
          <ul className="navbar-nav d-flex justify-content-end text-center">
            <NavItem linkTo="/our-gym" linkVal="Our Gym" />
            <NavItem linkTo="/prices" linkVal="Prices" />
            <NavItem linkTo="/store" linkVal="Store" />
            <NavItem linkTo="/contact" linkVal="Contact" />
            {!inCart.length ? null : (
              <li className="text-theme-blue d-flex justify-content-md-end justify-content-center">
                <Link to="/store/checkout" className="checkoutIcon">
                  <i className="fas fa-shopping-cart" />
                </Link>
                <button
                  className="dropdown-toggle btn d-none d-lg-block text-theme-blue p-0"
                  id="dropdownMenuButton"
                  data-toggle="dropdown"
                />
                <div
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuLink"
                >
                  <Dropdown />
                </div>
              </li>
            )}
          </ul>
        </div>
      </nav>
    </React.Fragment>
  );
}

NavBar.propTypes = {
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
)(NavBar);
