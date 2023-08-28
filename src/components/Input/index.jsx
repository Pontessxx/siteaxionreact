import React from "react";
import "./Input.css";

const Input = ({ type, placeholder, value, onChange }) => {
  return (
    <input className="inputLoign"
      value={value}
      onChange={onChange}
      type={type}
      placeholder={placeholder}
    />
  );
};

export default Input;