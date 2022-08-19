import React from "react";
import { render, screen } from "@testing-library/react";
import Sidebar from "./Sidebar";

describe("Sidebar Component", () => {
  it("renders Logout button", () => {
    render(<Sidebar />);
    const link = screen.getByText(/dashboard/i);
    expect(link).toBeInTheDocument();
  });
});
