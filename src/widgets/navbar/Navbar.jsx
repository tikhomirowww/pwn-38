import React, { useEffect, useState } from "react";
import styles from "./navbar.module.css";
import { Link } from "react-router-dom";
import image from "../../foto/image.png";
const Navbar = () => {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    let handler = () => {
      setOpen(false);
    };
    document.addEventListener("mousedown", handler);
  });
  console.log(open);
  return (
    <div className={styles.navbar}>
      <h2 className={styles.logo}>G-Evening</h2>
      <div className="navImage">
        <img onClick={() => setOpen(!open)} src={image} />
      </div>
      <div className={`navMenu ${open ? "active" : ""}`}>
        <Link to="/register">Sign up</Link>
        <Link to="/login">Sign in</Link>
        <Link to="/logout">Logout</Link>
      </div>
    </div>
  );
};

export default Navbar;
