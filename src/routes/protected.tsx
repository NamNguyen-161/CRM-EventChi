import { ROUTE_CONFIG } from "@/constants/routes";
import { getAuthenticate } from "@/utils/localStorageService";
import { IChildren } from "@/utils/types";
import React, { FC, useEffect, useState } from "react";
import { Navigate, Outlet, useNavigate } from "react-router-dom";

const ProtectedRoute: FC<IChildren> = ({ children }) => {
  const navigation = useNavigate();
  const isAuthenticated = getAuthenticate();
  const [login, setLogin] = useState(isAuthenticated === "true" ? true : false);

  useEffect(() => {
    const isAuthenticated = getAuthenticate();
    setLogin(isAuthenticated === "true" ? true : false);
  }, [navigation]);

  return login ? (
    <>
      {children}
      <Outlet />
    </>
  ) : (
    <Navigate to={ROUTE_CONFIG.LOGIN} replace />
  );
};

export default ProtectedRoute;
