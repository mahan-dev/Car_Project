import React from "react";
import Image from "next/image";
import { Typography } from "@mui/material";

import notFound from "@/public/images/notfound/notFound.svg";
import styles from "@/modules/styles/notFound/route.module.css";
const NotFound = () => {
  return (
    <section className={styles.container}>
      <div className={styles["container_image-wrapper"]}>
        <Image src={notFound} width={300} height={150} alt="notFound" />
      </div>
      <Typography
        component={"h2"}
        sx={{ fontSize: "1.4rem", fontWeight: "600" }}
      >
        404 Not Found 🙁
      </Typography>
    </section>
  );
};

export default NotFound;
