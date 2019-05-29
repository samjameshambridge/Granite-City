import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function NavItem({ linkTo, linkVal }) {
  return (
    <li className="nav-item">
      <Link to={linkTo}>{linkVal}</Link>
    </li>
  );
}

NavItem.propTypes = {
  linkTo: PropTypes.string.isRequired,
  linkVal: PropTypes.string.isRequired
};

export default NavItem;
