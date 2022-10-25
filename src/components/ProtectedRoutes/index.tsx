import { ReactNode, useContext } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { AuthContext } from "../../context/Auth/Auth";
import { Loading } from "../Loading";
import React from "react";

export const ProtectRoutes = () => {
  const { user, loadingUser } = useContext(AuthContext);
  const location = useLocation();

  if (loadingUser) {
    return <Loading />;
  }

  return user ? (
    <Outlet />
  ) : (
    <Navigate to="/" replace state={{ from: location }} />
  );
};
