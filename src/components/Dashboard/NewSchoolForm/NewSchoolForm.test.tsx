import React from "react";
import { render, screen } from "@testing-library/react";
import NewSchoolForm from "./NewSchoolForm";

it("renders learn react link", () => {
  render(<NewSchoolForm />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
