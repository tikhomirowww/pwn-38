import React, { useEffect, useState } from "react";
import styles from "./navbar.module.css";
import { Link } from "react-router-dom";
import image from "../../foto/image.png";
import { useDispatch, useSelector } from "react-redux";
import { getCurrentUser } from "../../store/users/users.actions";
import { logout } from "../../store/users/users.slice";
import Button from "../buttons/Button";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.users);
  const [user, setUser] = useState({
    profileImage: image,
    username: "",
  });

  useEffect(() => {
    let handler = () => {
      setOpen(false);
    };
    document.addEventListener("mousedown", handler);

    const id = localStorage.getItem("currentUser");
    if (id) {
      dispatch(getCurrentUser(id));
    }
  }, []);

  useEffect(() => {
    if (currentUser && currentUser.profileImage) {
      setUser(currentUser);
    } else {
      setUser({
        profileImage: image,
        username: "",
      });
    }
  }, [currentUser]);
  return (
    <div className={styles.navbar}>
      <h2 className={styles.logo}>G-Evening</h2>
      <div className={styles.navbarUser}>
        <Button />
        <Button />
        <Link to="/profile">{user.username}</Link>
      </div>
      <div className="navImage">
        <img
          alt=""
          onClick={() => setOpen(!open)}
          src={
            currentUser && currentUser.profileImage
              ? currentUser.profileImage
              : image
          }
        />
      </div>

      <div className={`navMenu ${open ? "active" : ""}`}>
        {currentUser ? (
          <div>
            <Link to="/profile">My profile</Link>
            <p onClick={() => dispatch(logout())}>Logout</p>
          </div>
        ) : (
          <div
            style={{ display: "flex", flexDirection: "column", rowGap: "10px" }}
          >
            <Link to="/register">Sign up</Link>
            <Link to="/login">Sign in</Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
