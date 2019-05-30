import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

function ModalInfo({ info }) {
  return <p className="modal-info text-muted">{info}</p>;
}

ModalInfo.propTypes = {
  info: PropTypes.string.isRequired
};

const mapStateToProps = ({
  products: {
    detailProduct: { info }
  }
}) => {
  return {
    info
  };
};

export default connect(
  mapStateToProps,
  null
)(ModalInfo);
