import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const AuthProvider = () => {
  const { currentUser } = useSelector((state) => state.users);

  if (!currentUser) {
    return <Navigate to={"/"} />;
  } else {
    return <Outlet />;
  }
};

export default AuthProvider;
