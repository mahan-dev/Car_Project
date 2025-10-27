import React from "react";

import { sessionUser } from "@/helper/userNameDashboard";
import { Typography } from "@mui/material";

import styles from "@/templates/styles/dashboardPage/route.module.css";

const DashboardPage = async () => {
  const userName = await sessionUser();
  return (
    <div className={styles.container}>
      <Typography component={"h2"}>
        welcome 👋 {userName || "nothing found"}
      </Typography>
    </div>
  );
};

export default DashboardPage;
