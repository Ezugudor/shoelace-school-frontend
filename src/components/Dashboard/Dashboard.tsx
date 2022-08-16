import React, { FC } from "react";
import Navbar from "../shared/Navbar/Navbar";
import Sidebar from "../shared/Sidebar/Sidebar";
import NewSchoolForm from "./NewSchoolForm/NewSchoolForm";
import SchoolTable from "./SchoolTable/SchoolTable";
import styles from "./Dashboard.module.css";

const Dashboard: FC = () => {
  return (
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
            <SchoolTable />
          </section>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
