import React from "react";
import PropTypes from "prop-types";
import "./carpenter-button.css";

export const CarpenterButton = ({ label, enable }) => {
  const mode = enable ? "primary--enable" : "primary--disable";
  return (
    <button type="button" className={["primary", mode].join(" ")}>
      <span className="label">{label}</span>
    </button>
  );
};

CarpenterButton.propTypes = {
  // que el boton tenga siempre un label   */
  label: PropTypes.string.isRequired,
};
