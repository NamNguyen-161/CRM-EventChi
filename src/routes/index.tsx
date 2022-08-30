import React, { lazy, memo, Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import { ROUTE_CONFIG } from "@/constants/routes";
import ProtectedRoute from "./protected";
import { lazyMinLoadTime } from "@/components/LazyLoadComponent/LazyLoadComponent";
import LoadingIndicator from "@/components/LoadingIndicator/LoadingIndicator";

const HomeScreen = lazyMinLoadTime(() => import("@/screens/Home"), 1000);
const AuthScreen = lazyMinLoadTime(() => import("@/screens/Auth"), 1000);

const Navigation = () => {
  return (
    <BrowserRouter>
      <Suspense
        fallback={<LoadingIndicator styleWrapper={{ height: "100vh" }} />}
      >
        <Routes>
          <Route path={ROUTE_CONFIG.DASHBOARD} element={<ProtectedRoute />}>
            <Route
              path={`${ROUTE_CONFIG.DASHBOARD}/*`}
              element={<HomeScreen />}
            />
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
