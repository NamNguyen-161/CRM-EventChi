import React, { lazy, memo, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import { CircularProgress } from "@mui/material";
import { ROUTE_CONFIG } from "@/constants/routes";
import ProtectedRoute from "./protected";

const DashboardScreen = lazy(() => import("@/screens/Dashboard"));
const AuthScreen = lazy(() => import("@/screens/Auth"));

const Navigation = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<CircularProgress />}>
        <Routes>
          <Route path={ROUTE_CONFIG.DASHBOARD} element={<ProtectedRoute />}>
            <Route index element={<DashboardScreen />} />
          </Route>
          <Route path={ROUTE_CONFIG.LOGIN} element={<AuthScreen />} />
          <Route path="*" element={<p>There's nothing here: 404!</p>} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

const NavigationApp = memo(Navigation);

export default NavigationApp;
