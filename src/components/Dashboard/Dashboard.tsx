import React, { FC, FormEvent, useState } from "react";
import Navbar from "../shared/Navbar/Navbar";
import Sidebar from "../shared/Sidebar/Sidebar";
import NewSchoolForm from "./NewSchoolForm/NewSchoolForm";
import SchoolTable from "./SchoolTable/SchoolTable";
import styles from "./Dashboard.module.css";
import EditSchoolModal from "./EditSchoolModal/EditSchoolModal";
import { School, SchoolKeys } from "../../models/Schools";
import { schoolsMock } from "../../mocks/schoolMock";
import withAuth from "../../context/withAuth";
import withBackendAccess from "../../context/withBackendAccess";
import { Authentication } from "../../context/Auth";
import { BackendProps } from "../../context/Backend";

const emptySchoolObj: School = {
  id: "",
  name: "",
  location: ""
};

interface DashboardProps {
  auth: Authentication;
  backend: BackendProps;
}

const Dashboard: FC<DashboardProps> = props => {
  const { auth, backend } = props;
  const [editSchool, setEditSchool] = useState(false);
  const [schools, setSchools] = useState(schoolsMock);
  const [selectedSchool, setSelectedSchool] = useState<School>({} as School);
  const [newSchool, setNewSchool] = useState<School>(emptySchoolObj);
  const toggleEditSchool = () => {
    setEditSchool(!editSchool);
  };

  console.log("dash backend", backend.errors);
  console.log("dash auth", auth.authenticated);
  const handleSchoolDelete = (schoolID: string) => {
    if (
      !window.confirm(`Confirm you want to delete school with ID ${schoolID} ?`)
    )
      return false;
    const newSchools = schools.filter(school => school.id !== schoolID);
    //TODO: Hit the Network
    setSchools(newSchools);
  };

  const prepSchoolEdit = (schoolID: string) => {
    const currentSchool = schools.find(s => s.id === schoolID) as School;
    setSelectedSchool(currentSchool);
    toggleEditSchool();
  };

  const editSelectedSchool = (key: SchoolKeys, value: string) => {
    const school = { ...selectedSchool };
    school[key] = value;
    setSelectedSchool(school);
  };

  const setNewSchoolField = (key: SchoolKeys, value: string) => {
    const school = { ...newSchool };
    school[key] = value;
    setNewSchool(school);
  };

  const saveSelectedSchool = (e: FormEvent) => {
    e.preventDefault();
    const copySchools = [...schools];
    const currentIndex = copySchools.findIndex(
      school => school.id === selectedSchool.id
    );
    copySchools[currentIndex] = selectedSchool;
    //TODO: Validate and Hit the Network
    setSchools(copySchools);
    toggleEditSchool();
  };

  const resetForm = () => {
    setNewSchool(emptySchoolObj);
  };

  const addNewSchool = (e: FormEvent) => {
    e.preventDefault();
    const cNewSchool = { ...newSchool };
    cNewSchool.id = `sch-${Math.random()}`; //This for testing only and should be set from backend and removed.
    const newSchools = [...schools, cNewSchool];
    //TODO: Validate Input and Hit the Network
    setSchools(newSchools);
    resetForm();
  };

  return (
    <>
      <div className={styles.InsideBody}>
        <aside className={styles.SideBar}>
          <Sidebar />
        </aside>
        <div className={styles.LayoutRight}>
          <header>
            <Navbar />
          </header>
          <main>
            <section>
              <NewSchoolForm
                school={newSchool}
                setFieldValue={setNewSchoolField}
                addSchool={addNewSchool}
              />
            </section>
            <section className={styles.TableSection}>
              <SchoolTable
                schools={schools}
                deleteSchool={handleSchoolDelete}
                editSchool={prepSchoolEdit}
              />
            </section>
          </main>
        </div>
      </div>
      <EditSchoolModal
        show={editSchool}
        toggleModal={toggleEditSchool}
        selectedSchool={selectedSchool}
        updateSelectedSchool={editSelectedSchool}
        saveSelectedSchool={saveSelectedSchool}
      />
    </>
  );
};

export default withAuth(withBackendAccess(Dashboard));
