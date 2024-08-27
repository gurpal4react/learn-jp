import React from "react";
import '../styles/ToggleSwitch.scss'

const ToggleSwitch = ({ value, handleChange }) => {
  const internalHandleChange = () => {
    handleChange(!value)
  };
  return (
    <label className="switch">
      <input type="checkbox" checked={value} onChange={internalHandleChange} />
      <span className="slider round"></span>
    </label>
  );
};

export default ToggleSwitch;
