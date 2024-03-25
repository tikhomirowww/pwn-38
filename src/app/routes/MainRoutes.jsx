import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../../pages/home/HomePage";
import RegisterPage from "../../pages/auth/register/RegisterPage";
import LoginPage from "../../pages/auth/login/LoginPage";
import ProfilePage from "../../pages/profile/ProfilePage";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/profile" element={<ProfilePage />} />
    </Routes>
  );
};

export default MainRoutes;
