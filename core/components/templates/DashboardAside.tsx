import React from "react";
import styles from "@/templates/styles/dashboardAside/route.module.css";
import AsideContent from "@/modules/AsideContent";

import { RiDashboard3Fill } from "react-icons/ri";

interface DashboardAsideProps {
  children: React.ReactNode;
  isAdmin?: "ADMIN" | "USER";
}
const DashboardAside = async ({ children, isAdmin }: DashboardAsideProps) => {
  return (
    <div className={styles.container}>
      <aside className={styles.container__aside}>
        <div className={styles.aside__title}>
          <RiDashboard3Fill />
          <h3>Dashboard</h3>
        </div>
        <AsideContent isAdmin={isAdmin} />
      </aside>
      <div className={styles.container__main}>{children}</div>
    </div>
  );
};

export default DashboardAside;
