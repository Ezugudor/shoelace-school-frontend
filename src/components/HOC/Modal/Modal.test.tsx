import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import Modal from "./Modal";

describe("Modal Component", () => {
  const MockClick = jest.fn();
  it("renders Modal component with title", () => {
    render(
      <Modal show={true} title="Title" click={MockClick}>
        <span>Child</span>
      </Modal>
    );
    const elem = screen.getByText(/title/i);
    expect(elem).toBeInTheDocument();
  });

  it("renders Modal component with children", () => {
    render(
      <Modal show={true} title="Title" click={MockClick}>
        <span>Child</span>
      </Modal>
    );
    const elem = screen.getByText(/child/i);
    expect(elem).toBeInTheDocument();
  });

  it("should not render modal if prop 'show' is false", () => {
    render(
      <Modal show={false} title="Title" click={MockClick}>
        <span>Child</span>
      </Modal>
    );
    const elem = screen.queryByText(/child/i);
    expect(elem).not.toBeInTheDocument();
  });

  it("calls modal overlay handler", () => {
    render(
      <Modal show={true} title="Title" click={MockClick}>
        <span>Child</span>
      </Modal>
    );
    const overlay = screen.getByTestId(/overlay/i);
    fireEvent.click(overlay);
    expect(MockClick).toHaveBeenCalledTimes(1);
  });
});
