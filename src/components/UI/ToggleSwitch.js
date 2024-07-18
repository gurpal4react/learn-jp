import React from "react";
import '../styles/ToggleSwitch.scss'

const ToggleSwitch = ({ value, handleChange }) => {
  const internalHandleChange = () => {
    handleChange(!value)
  };
  return (
    <label class="switch">
      <input type="checkbox" checked={value} onChange={internalHandleChange} />
      <span class="slider round"></span>
    </label>
  );
};

export default ToggleSwitch;
