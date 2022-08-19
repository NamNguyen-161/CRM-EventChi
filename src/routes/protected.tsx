import { ROUTE_CONFIG } from "@/constants/routes";
import React, { FC, useState } from "react";
import { Navigate, Outlet, useNavigate } from "react-router-dom";

type Props = {
  children?: React.ReactNode;
};

const ProtectedRoute: FC<Props> = ({ children }) => {
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
