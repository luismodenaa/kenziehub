import { Route, Routes } from "react-router-dom";
import { PageNotFound } from "../pages/NotFoundPage";
import { ProtectRoutes } from "../components/ProtectedRoutes";
import { Dashboard } from "../pages/DashboardPage";
import { LandingPage } from "../pages/LandingPage";
import { LoginPage } from "../pages/LoginPage";
import { RegisterPage } from "../pages/RegisterPage";
import { AnimatePresence } from "framer-motion";
import React from "react";

export const RoutesMain = ({ themeToggler, theme }) => {
  return (
    <AnimatePresence>
      <Routes>
        <Route
          path="/"
          element={<LandingPage themeToggler={themeToggler} theme={theme} />}
        />
        <Route
          path="login"
          element={<LoginPage themeToggler={themeToggler} theme={theme} />}
        />
        <Route
          path="cadastro"
          element={<RegisterPage themeToggler={themeToggler} theme={theme} />}
        />
        <Route element={<ProtectRoutes />}>
          <Route
            path="dashboard"
            element={<Dashboard themeToggler={themeToggler} theme={theme} />}
          />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </AnimatePresence>
  );
};
