import React from "react";

import styles from "@/templates/styles/dashboardAside/route.module.css";
import AsideContent from "@/modules/AsideContent";

import { RiDashboard3Fill } from "react-icons/ri";
import { getServerSession } from "next-auth";
import { authOptions } from "@/core/utils/authOptions";
import { connectDb } from "@/core/utils/connectDb";
import { UserModel } from "@/core/models/user";

interface DashboardAsideProps {
  children: React.ReactNode;
}
const DashboardAside = async ({ children }: DashboardAsideProps) => {
  await connectDb();
  const session = await getServerSession(authOptions);
  const user = await UserModel.findOne({ email: session.user.email });

  const isAdmin = user.role === "ADMIN";

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
