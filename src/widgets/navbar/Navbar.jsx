import React, { useEffect, useState } from "react";
import styles from "./navbar.module.css";
import { Link, useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCurrentUser } from "../../store/users/users.actions";
import { logout } from "../../store/users/users.slice";
import Button from "../buttons/Button";
import { getProducts } from "../../store/products/products.actions";
import InputNew from "../inputs/InputNew";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.users);
  const [user, setUser] = useState({
    profileImage: "",
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
        profileImage: "",
        username: "",
      });
    }
  }, [currentUser]);

  //Search
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchVal, setSearchVal] = useState(searchParams.get("q") || "");

  useEffect(() => {
    const currentParams = Object.fromEntries([...searchParams]);
    console.log(currentParams);
    setSearchParams({ ...currentParams, q: searchVal });
  }, [searchVal]);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <div className={styles.navbar}>
      <Link className={styles.logo} to="/">
        <img
          style={{ width: "50px" }}
          src="https://sweettasteofamerica.co.uk/wp-content/uploads/2023/02/store-3980370-3297247.webp"
          alt="logo"
        />
      </Link>
      <div className={styles.navUserName}>
        <div className="navImage style">
          <img
            alt=""
            onClick={() => setOpen(!open)}
            src={
              currentUser && currentUser.profileImage
                ? currentUser.profileImage
                : "https://th.bing.com/th/id/R.f7e7714098bdd177c9d302f82abb2a37?rik=dP%2f%2fNCv%2bKsSyGQ&pid=ImgRaw&r=0"
            }
          />
          <Link to="/">{user.username ? user.username : "Гость"}</Link>
        </div>
      </div>
      <div className={styles.navbarUser}>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            dispatch(getProducts(searchVal));
          }}
        >
          <InputNew
            className={styles.searchInp}
            value={searchVal}
            onChange={(e) => setSearchVal(e.target.value)}
            name="Search"
            placeholder="Поиск...."
          />
        </form>
        {/* {currentUser && currentUser.email === "admin@gmail.com" && (
          <Link to="/create-product">
            <Button style={{ color: "white" }} color="green">
              Create product
            </Button>
          </Link>
        )} */}
        {/* <Link to="/users">
          <Button style={{ color: "white" }} color="blue">
            Users
          </Button>
        </Link> */}
        {/* {currentUser && (
          <Link to="/create-post">
            <Button style={{ color: "white" }} color="green">
              Create post
            </Button>
          </Link>
        )} */}
        {/* {currentUser && (
          <Link to="/edit-profile">
            <Button style={{ color: "white" }}>Edit profile</Button>
          </Link>
        )} */}
        {/* <Button /> */}
      </div>
      {/* <div className="navImage">
        <Link to="/">{user.username ? user.username : "Гость"}</Link>
        <img
          alt=""
          onClick={() => setOpen(!open)}
          src={
            currentUser && currentUser.profileImage
              ? currentUser.profileImage
              : "https://th.bing.com/th/id/R.f7e7714098bdd177c9d302f82abb2a37?rik=dP%2f%2fNCv%2bKsSyGQ&pid=ImgRaw&r=0"
          }
        />
      </div> */}
      <Link to="/basket">
        <div className={styles.basketWrap}>
          <img
            className={styles.basket}
            src="https://bcmsa.devcogroup.com/wp-content/uploads/2020/02/basketicon.png"
            alt="basket"
          />
        </div>
      </Link>

      <div className={`navMenu ${open ? "active" : ""}`}>
        {currentUser ? (
          <div
            style={{ display: "flex", flexDirection: "column", rowGap: "10px" }}
          >
            <Link to="/edit-profile">Изменить профиль</Link>
            {currentUser && currentUser.email === "admin@gmail.com" ? (
              <Link to="/create-product">Добавить карточку</Link>
            ) : (
              ""
            )}
            {/* <Link to="/create-product">Добавить продукт</Link>  */}
            <p
              className={styles.colorViolet}
              onClick={() => dispatch(logout())}
            >
              Выйти
            </p>
          </div>
        ) : (
          <div
            style={{ display: "flex", flexDirection: "column", rowGap: "10px" }}
          >
            <Link to="/register">Регистрция</Link>
            <Link to="/login">Войти</Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
