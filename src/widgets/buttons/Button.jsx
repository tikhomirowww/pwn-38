import React from "react";
import styles from "./button.module.css";

const Button = ({ children, onClick, className, color }) => {
  const colorClass = [
    color === "red" ? styles.red : "",
    color === "green" ? styles.green : "",
    color === "blue" ? styles.blue : "",
  ].join(" ");
  return (
    <button className={`${colorClass}  ${className}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
