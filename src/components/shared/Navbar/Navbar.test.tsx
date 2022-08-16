import React from "react";
import { render, screen } from "@testing-library/react";
import Navbar from "./Navbar";

it("renders learn react link", () => {
  render(<Navbar />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
