import React from "react";
import PropTypes from "prop-types";

function Title({ className, title }) {
  return (
    <h3 className={`text-center text-theme-blue ${className}`}>{title}</h3>
  );
}

Title.propTypes = {
  title: PropTypes.string.isRequired
};

Title.defaultProps = {
  className: ""
};

export default Title;
