import React, { FC, FormEvent, useState } from "react";
import Navbar from "../shared/Navbar/Navbar";
import Sidebar from "../shared/Sidebar/Sidebar";
import NewSchoolForm from "./NewSchoolForm/NewSchoolForm";
import SchoolTable from "./SchoolTable/SchoolTable";
import styles from "./Dashboard.module.css";
import EditSchoolModal from "./EditSchoolModal/EditSchoolModal";
import { School, SchoolKeys } from "../../models/Schools";
import { schoolsMock } from "../../mocks/schoolMock";

const Dashboard: FC = () => {
  const [editSchool, setEditSchool] = useState(false);
  const [schools, setSchools] = useState(schoolsMock);
  const [selectedSchool, setSelectedSchool] = useState<School>({
    id: "",
    name: "",
    location: ""
  });

  const [newSchool, setNewSchool] = useState<School>({
    id: "",
    name: "",
    location: ""
  });

  const toggleEditSchool = () => {
    setEditSchool(!editSchool);
  };

  const handleSchoolDelete = (schoolID: string) => {
    if (
      !window.confirm(`Confirm you want to delete school with ID ${schoolID} ?`)
    )
      return false;
    const newSchools = schools.filter(school => school.id != schoolID);
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

  const addNewSchool = (e: FormEvent) => {
    e.preventDefault();
    const cNewSchool = { ...newSchool };
    cNewSchool.id = `sch-${Math.random()}`; //This for testing only and should be set from backend and removed.
    const newSchools = [...schools, cNewSchool];
    //TODO: Validate and Hit the Network
    setSchools(newSchools);
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

export default Dashboard;
