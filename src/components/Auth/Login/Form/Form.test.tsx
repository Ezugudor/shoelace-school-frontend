import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import Form from "./Form";
import { UserLogin } from "../../../../models/User";

describe("Login Page Form Component", () => {
  const MockSubmit = jest.fn();
  const MockSetFieldValue = jest.fn();

  it("Username field: calls onchange handler", () => {
    render(
      <Form
        submit={MockSubmit}
        setFieldValue={MockSetFieldValue}
        credentials={{} as UserLogin}
      />
    );

    const field = screen.getByPlaceholderText(/username/i);
    fireEvent.change(field, { target: { value: "h" } });
    fireEvent.change(field, { target: { value: "hi" } });
    expect(MockSetFieldValue).toHaveBeenCalledTimes(2);
  });

  it("Password field: calls onchange handler", () => {
    render(
      <Form
        submit={MockSubmit}
        setFieldValue={MockSetFieldValue}
        credentials={{} as UserLogin}
      />
    );
    const field = screen.getByPlaceholderText(/username/i);
    fireEvent.change(field, { target: { value: "h" } });
    fireEvent.change(field, { target: { value: "hi" } });
    expect(MockSetFieldValue).toHaveBeenCalledTimes(2);
  });

  it("calls submit handler", () => {
    render(
      <Form
        submit={MockSubmit}
        setFieldValue={MockSetFieldValue}
        credentials={{} as UserLogin}
      />
    );
    const btn = screen.getByText(/login/i);
    fireEvent.click(btn);
    expect(MockSubmit).toHaveBeenCalledTimes(1);
  });
});
