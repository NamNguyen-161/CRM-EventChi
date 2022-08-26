import React, { lazy, memo, Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import { CircularProgress } from "@mui/material";
import { ROUTE_CONFIG } from "@/constants/routes";
import ProtectedRoute from "./protected";

const HomeScreen = lazy(() => import("@/screens/Home"));
const AuthScreen = lazy(() => import("@/screens/Auth"));

const Navigation = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<CircularProgress />}>
        <Routes>
          <Route path={ROUTE_CONFIG.DASHBOARD} element={<ProtectedRoute />}>
            <Route path={ROUTE_CONFIG.HOME} element={<HomeScreen />}>
              <Route index element={<HomeScreen />} />
            </Route>
          </Route>
          <Route path={ROUTE_CONFIG.LOGIN} element={<AuthScreen />} />
          <Route
            path="*"
            element={<Navigate to={ROUTE_CONFIG.LOGIN} replace />}
          />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

const NavigationApp = memo(Navigation);

export default NavigationApp;
