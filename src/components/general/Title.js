import React from "react";
import PropTypes from "prop-types";

function Title({ className, title }) {
  return (
    <h3 className={`text-center text-theme-blue ${className}`}>{title}</h3>
  );
}

Title.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string.isRequired
};

export default Title;
