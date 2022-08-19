import React from "react";
import { render, screen } from "@testing-library/react";
import Navbar from "./Navbar";
import { BrowserRouter } from "react-router-dom";

describe("Navbar Component", () => {
  const MockNavbar = () => (
    <BrowserRouter>
      <Navbar />
    </BrowserRouter>
  );

  it("renders Logout button", () => {
    render(<MockNavbar />);
    const btn = screen.getByText(/logout/i);
    expect(btn).toBeInTheDocument();
  });
});
