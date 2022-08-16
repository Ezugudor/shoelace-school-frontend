import React from "react";
import { render, screen } from "@testing-library/react";
import { Signup } from "./Signup";

it("renders learn react link", () => {
  render(<Signup />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
