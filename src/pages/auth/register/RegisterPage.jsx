import React, { useEffect, useState } from "react";
import styles from "../auth.module.css";
import AuthForm from "../../../features/auth/AuthForm";
import Input from "../../../widgets/inputs/Input";
import Button from "../../../widgets/buttons/Button";
import { getUsers, registerUser } from "../../../store/users/users.actions";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const RegisterPage = () => {
  const [password, setPassword] = useState("");
  const [user, setUser] = useState({
    username: "",
    password: "",
    passwordConfirm: "",
    email: "",
    profileImage: "",
  });

  function handleChange(e) {
    const { value, name } = e.target;
    setUser({ ...user, [name]: value });
  }

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { users } = useSelector((state) => state.users);
  console.log(users);
  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  async function handleSubmit(e) {
    e.preventDefault();
    for (let key in user) {
      if (!user[key]) {
        alert("Some inputs are empty!");
        return;
      }
    }
    if (user.password !== user.passwordConfirm) {
      alert("Passwords do not match");
      return;
    }

    if (user.password.length < 6) {
      alert("Password must be more than 6 symbol");
      return;
    }

    const userObj = await users.find(
      (item) =>
        item.username.toLocaleLowerCase() === user.username.toLocaleLowerCase()
    );
    console.log(userObj);
    if (userObj) {
      alert("You have already registered");
      return;
    }

    dispatch(registerUser(user));
    setUser({
      username: "",
      password: "",
      passwordConfirm: "",
      email: "",
      profileImage: "",
    });
    navigate("/");
    console.log(user);
  }

  return (
    <div>
      <AuthForm>
        <h2>Register form</h2>
        <form onSubmit={handleSubmit}>
          <Input
            onChange={handleChange}
            name="username"
            value={user.username}
            type="text"
          />
          <Input
            onChange={handleChange}
            name="password"
            value={user.password}
            type="password"
          />
          <Input
            onChange={handleChange}
            name="passwordConfirm"
            value={user.passwordConfirm}
            type="password"
          />
          <Input
            onChange={handleChange}
            name="email"
            value={user.email}
            type="email"
          />
          <Input
            onChange={handleChange}
            name="profileImage"
            value={user.profileImage}
            type="url"
          />
          <Button>Sign up</Button>
        </form>
      </AuthForm>
    </div>
  );
};

export default RegisterPage;
