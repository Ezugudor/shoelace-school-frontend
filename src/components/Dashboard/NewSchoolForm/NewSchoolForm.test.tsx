import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import NewSchoolForm from "./NewSchoolForm";
import { School } from "../../../models/Schools";

describe("New School Form Component", () => {
  const MockSubmit = jest.fn();
  const MockSetFieldValue = jest.fn();

  it("Username field: calls onchange handler", () => {
    render(
      <NewSchoolForm
        addSchool={MockSubmit}
        setFieldValue={MockSetFieldValue}
        school={{} as School}
      />
    );

    const field = screen.getByPlaceholderText(/school name/i);
    fireEvent.change(field, { target: { value: "h" } });
    fireEvent.change(field, { target: { value: "hi" } });
    expect(MockSetFieldValue).toHaveBeenCalledTimes(2);
  });

  it("Password field: calls onchange handler", () => {
    render(
      <NewSchoolForm
        addSchool={MockSubmit}
        setFieldValue={MockSetFieldValue}
        school={{} as School}
      />
    );
    const field = screen.getByPlaceholderText(/school location/i);
    fireEvent.change(field, { target: { value: "h" } });
    fireEvent.change(field, { target: { value: "hi" } });
    expect(MockSetFieldValue).toHaveBeenCalledTimes(2);
  });

  it("calls submit handler", () => {
    render(
      <NewSchoolForm
        addSchool={MockSubmit}
        setFieldValue={MockSetFieldValue}
        school={{} as School}
      />
    );
    const btn = screen.getByText(/add school/i);
    fireEvent.click(btn);
    expect(MockSubmit).toHaveBeenCalledTimes(1);
  });
});
