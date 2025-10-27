import React from "react";
import styles from "@/modules/styles/addCar/route.module.css";
import { alpha, Typography } from "@mui/material";

interface AddCarProps {
  title: string;
}
const AddCar = ({ title }: AddCarProps) => {
  return (
    <section className={styles.container}>
      <Typography
        className={styles.container__title}
        sx={{
          backgroundColor: alpha("#000000", 0.2),
          color: "black",
          fontSize: "1.3rem",
          fontWeight: "600",
          borderRadius: "0.3rem",
        }}
        component={"h2"}
      >
        {title}
      </Typography>
    </section>
  );
};

export default AddCar;
