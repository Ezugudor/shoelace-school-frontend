import React from "react";
import { render, screen } from "@testing-library/react";
import EditSchoolModal from "./EditSchoolModal";
import { School } from "../../../models/Schools";

describe("renders edit school modal", () => {
  const MockToggleModal = jest.fn();
  const MockSetField = jest.fn();
  const MockSave = jest.fn();
  const MockSchools: School = {
    id: "abc",
    name: "UNN",
    location: "Nsukka"
  };

  it("should hydrate the form fields with data", () => {
    render(
      <EditSchoolModal
        toggleModal={MockToggleModal}
        selectedSchool={MockSchools}
        show={true}
        saveSelectedSchool={MockSave}
        updateSelectedSchool={MockSetField}
      />
    );
    const field = screen.getByDisplayValue(MockSchools.name);
    expect(field).toBeInTheDocument();
  });
});
