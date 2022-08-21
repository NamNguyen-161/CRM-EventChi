import { ROUTE_CONFIG } from "@/constants/routes";
import { IChildren } from "@/utils/types";
import React, { FC, useState } from "react";
import { Navigate, Outlet, useNavigate } from "react-router-dom";

const ProtectedRoute: FC<IChildren> = ({ children }) => {
  const navigation = useNavigate();
  const [isLogin, setIdLogin] = useState<boolean>(true);

  return isLogin ? (
    <>
      {children}
      <Outlet />
    </>
  ) : (
    <Navigate to={ROUTE_CONFIG.LOGIN} replace />
  );
};

export default ProtectedRoute;
