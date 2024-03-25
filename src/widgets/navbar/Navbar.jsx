import React, { useEffect, useState } from "react";
import styles from "./navbar.module.css";
import { Link } from "react-router-dom";
import image from "../../foto/image.png";
import { useDispatch, useSelector } from "react-redux";
import { getCurrentUser } from "../../store/users/users.actions";
import { logout } from "../../store/users/users.slice";

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
      <p>{user.username}</p>
      <div className="navImage">
        <img
          onClick={() => setOpen(!open)}
          src={
            currentUser && currentUser.profileImage
              ? currentUser.profileImage
              : image
          }
        />
      </div>
      <div className={`navMenu ${open ? "active" : ""}`}>
        <Link to="/profile">My profile</Link>
        <Link to="/register">Sign up</Link>
        <Link to="/login">Sign in</Link>
        <p onClick={() => dispatch(logout())}>Logout</p>
      </div>
    </div>
  );
};

export default Navbar;
