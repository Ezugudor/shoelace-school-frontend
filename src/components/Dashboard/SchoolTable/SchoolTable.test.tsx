import React from "react";
import { render, screen } from "@testing-library/react";
import SchoolTable from "./SchoolTable";
import { School } from "../../../models/Schools";

describe("SchoolTable Component", () => {
  const MockDelete = jest.fn();
  const MockEdit = jest.fn();
  const MockSchools: School[] = [
    {
      id: "abc",
      name: "UNN",
      location: "Nsukka"
    }
  ];

  it("renders school table header", () => {
    render(
      <SchoolTable
        schools={MockSchools}
        deleteSchool={MockDelete}
        editSchool={MockEdit}
      />
    );
    const txt = screen.getByText(/schools/i);
    expect(txt).toBeInTheDocument();
  });

  it("renders school table data", () => {
    render(
      <SchoolTable
        schools={MockSchools}
        deleteSchool={MockDelete}
        editSchool={MockEdit}
      />
    );
    const td = screen.getByText(/unn/i);
    expect(td).toBeInTheDocument();
  });
});
