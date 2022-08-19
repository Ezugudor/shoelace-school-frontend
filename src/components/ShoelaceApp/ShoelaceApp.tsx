import React from "react";
import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import { AuthConsumer, Authentication } from "../../context/Auth";
import { Login } from "../Auth";
import Dashboard from "../Dashboard/Dashboard";

const PrivateRoute = () => {
  return (
    <AuthConsumer>
      {({ authenticated, role }: Authentication) => {
        return authenticated ? <Outlet /> : <Navigate to="/Login" />;
      }}
    </AuthConsumer>
  );
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
