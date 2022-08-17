import React, { FC, useState } from "react";
import Navbar from "../shared/Navbar/Navbar";
import Sidebar from "../shared/Sidebar/Sidebar";
import NewSchoolForm from "./NewSchoolForm/NewSchoolForm";
import SchoolTable from "./SchoolTable/SchoolTable";
import styles from "./Dashboard.module.css";
import EditSchoolModal from "./EditSchoolModal/EditSchoolModal";

export interface School {
  id: string;
  name: string;
  location: string;
}

const schoolsMock: School[] = [
  { id: "abcd", name: "Oxford University", location: "United State" },
  { id: "efgh", name: "Cambride University", location: "United State" },
  { id: "ijkl", name: "University of Nigeria Nsukka", location: "Nigeria" }
];

const Dashboard: FC = () => {
  const [editSchool, setEditSchool] = useState(true);
  const [schools, setSchools] = useState(schoolsMock);
  const [selectedSchool, setSelectedSchool] = useState<School | {}>({});

  const toggleEditSchool = () => {
    setEditSchool(!editSchool);
  };

  const handleSchoolDelete = (schoolID: string) => {};

  const handleSchoolEdit = (schoolID: string) => {
    const currentSchool = schools.find(s => s.id === schoolID) || {};
    setSelectedSchool(currentSchool);
    toggleEditSchool();
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
              <NewSchoolForm />
            </section>
            <section className={styles.TableSection}>
              <SchoolTable
                schools={schools}
                deleteSchool={handleSchoolDelete}
                editSchool={handleSchoolEdit}
              />
            </section>
          </main>
        </div>
      </div>
      <EditSchoolModal show={editSchool} toggleModal={toggleEditSchool} />
    </>
  );
};

export default Dashboard;
