import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAppContext } from "./context/AppContext";
//public protection
export function ProtectedRouter() {
  const { userInfo } = useAppContext();
  return userInfo ? <Outlet /> : <Navigate to="/sign-in" />;
}
