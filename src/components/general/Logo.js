import React from "react";

import logo from "img/logo-copy.png";

function Logo({ className }) {
  return <img alt="Granite City Logo" className={className} src={logo} />;
}

Logo.defaultProps = {
  className: ""
};

export default Logo;
