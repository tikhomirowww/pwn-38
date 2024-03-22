import React, { useState } from "react";
import styles from "../auth.module.css";
import AuthForm from "../../../features/auth/AuthForm";
import Input from "../../../widgets/inputs/Input";
import Button from "../../../widgets/buttons/Button";

const RegisterPage = () => {
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

  function handleSubmit(e) {
    e.preventDefault();
    for (let key in user) {
      if (!user[key]) {
        alert("Some inputs are empty!");
        return;
      }
    }
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
            type="text"
          />
          <Input
            onChange={handleChange}
            name="passwordConfirm"
            value={user.passwordConfirm}
            type="text"
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
          <Button color="blue">Sign up</Button>
        </form>
      </AuthForm>
    </div>
  );
};

export default RegisterPage;
