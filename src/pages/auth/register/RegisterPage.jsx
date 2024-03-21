import React, { useState } from "react";
import styles from "../auth.module.css";
import AuthForm from "../../../features/auth/AuthForm";

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
    if (user.password !== user.passwordConfirm) {
      alert("Passwords do not match");
      return;
    }

    console.log(user);
  }

  return (
    <div>
      <AuthForm>
        <h2>Register form</h2>
        <form onSubmit={handleSubmit}>
          <input
            onChange={handleChange}
            name="username"
            value={user.username}
            type="text"
            placeholder="username"
          />
          <input
            onChange={handleChange}
            name="password"
            value={user.password}
            type="password"
            placeholder="password"
          />
          <input
            onChange={handleChange}
            name="passwordConfirm"
            value={user.passwordConfirm}
            type="password"
            placeholder="password confirm"
          />
          <input
            onChange={handleChange}
            name="email"
            value={user.email}
            type="email"
            placeholder="email"
          />
          <input
            onChange={handleChange}
            name="profileImage"
            value={user.profileImage}
            type="url"
            placeholder="Image url"
          />
          <button>Sign up</button>
        </form>
      </AuthForm>
    </div>
  );
};

export default RegisterPage;
