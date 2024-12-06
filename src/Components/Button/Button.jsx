import React, { useState } from "react";
import "./Button.css";

const Button = ({ children, onTouch, isActive }) => {
  return (
    <>
      <button
        className={isActive ? "btn btn-primary" : "button"}
        onClick={onTouch}
      >
        {children}
      </button>
    </>
  );
};

export default Button;
