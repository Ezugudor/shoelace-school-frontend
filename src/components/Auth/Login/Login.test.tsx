import React from "react";
import { render, screen } from "@testing-library/react";
import { Login } from "./Login";
import { BrowserRouter } from "react-router-dom";

describe("Login Page Component", () => {
  const MockLogin = () => (
    <BrowserRouter>
      <Login />
    </BrowserRouter>
  );
  it("renders Username Field", () => {
    render(<MockLogin />);
    const field = screen.getByPlaceholderText(/username/i);
    expect(field).toBeInTheDocument();
  });

  it("renders Password Field", () => {
    render(<MockLogin />);
    const field = screen.getByPlaceholderText(/password/i);
    expect(field).toBeInTheDocument();
  });

  it("renders Login  Button", () => {
    render(<MockLogin />);
    const btn = screen.getByText(/login/i);
    expect(btn).toBeInTheDocument();
  });
});
