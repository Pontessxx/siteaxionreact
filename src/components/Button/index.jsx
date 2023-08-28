import React from "react";
import "./Button.css";

const Button = ({ Text, onClick, Type = "button" }) => {
  return (
    <button className="buttonLogin" type={Type} onClick={onClick}>
      {Text}
    </button>
  );
};

export default Button;