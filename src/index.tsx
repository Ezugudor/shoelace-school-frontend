import React from "react";
import ReactDOM from "react-dom/client";
import "./global-css-reset.css";
import ShoelaceApp from "./components/ShoelaceApp/ShoelaceApp";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./context/Auth";
import { BackendProvider } from "./context/Backend";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <BrowserRouter>
    <AuthProvider>
      <BackendProvider>
        <React.StrictMode>
          <ShoelaceApp />
        </React.StrictMode>
      </BackendProvider>
    </AuthProvider>
  </BrowserRouter>
);
