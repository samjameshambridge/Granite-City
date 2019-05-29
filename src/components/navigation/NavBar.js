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
      <nav className="navbar navbar-expand">
        <Link to="/Granite-City/" className="navbar-brand">
          <Logo className="nav-logo" />
        </Link>
        <ul className="navbar-nav w-100 d-flex justify-content-end">
          <NavItem linkTo="/our-gym" linkVal="Our Gym" />
          <NavItem linkTo="/prices" linkVal="Prices" />
          <NavItem linkTo="/store" linkVal="Store" />
          <NavItem linkTo="/contact" linkVal="Contact" />
          {!inCart.length ? null : (
            <li className="text-theme-blue d-flex justify-content-end">
              <Link to="/store/checkout" className="checkoutIcon">
                <i className="fas fa-shopping-cart" />
              </Link>
              <button
                className="dropdown-toggle btn d-none d-lg-block text-theme-blue p-0"
                id="dropdownMenuButton"
                data-toggle="dropdown"
              />
              <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                <Dropdown />
              </div>
            </li>
          )}
        </ul>
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
