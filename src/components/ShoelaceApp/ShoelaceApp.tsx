import React from "react";
import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import { Login } from "../Auth";
import Dashboard from "../Dashboard/Dashboard";

const PrivateRoute = ({ path, ...rest }: any) => {
  return true ? <Outlet /> : <Navigate to="/signup" />;
};

const ShoelaceApp = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<PrivateRoute />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/*" element={<Dashboard />} />
        </Route>
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
};

export default ShoelaceApp;
