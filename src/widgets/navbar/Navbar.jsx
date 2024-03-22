import React from "react";
import styles from "./navbar.module.css";
import { Link } from "react-router-dom";
import Button from "../buttons/Button";

const Navbar = () => {
  return (
    <div>
      <Link to="/register">Sign up</Link>
      <Link to="/login">Sign in</Link>
    </div>
  );
};

export default Navbar;
