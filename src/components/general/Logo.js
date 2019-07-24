import React from "react";
import PropTypes from "prop-types";

import logo from "img/logo-copy.png";

function Logo({ className }) {
  return <img alt="Granite City Logo" className={className} src={logo} />;
}

Logo.propTypes = {
  className: PropTypes.string
};

export default Logo;
