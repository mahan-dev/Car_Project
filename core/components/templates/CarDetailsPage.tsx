import Image from "next/image";
import React from "react";

import styles from "@/templates/styles/carDetailsPage/route.module.css";

import CarDetail from "@/modules/CarDetail";
import { Typography } from "@mui/material";
import { ProfileInterface } from "@/models/interface/profileSchema";

interface CarDetails {data: { [key: string]: string } | ProfileInterface}

const CarDetailsPage = ({ data }: CarDetails) => {
  const { model_name, model_make_id } = data || {};
  console.log(data)

  return (
    <div className={styles.container}>
      {data && (
        <>
          <div className={styles["container__wrapper-image"]}>
            <Image
              src={`/images/showRoom/${model_make_id}.jpg`}
              fill
              priority
              alt={model_name}
              style={{ objectFit: "cover" }}
            />
          </div>

          <CarDetail data={data} />
        </>
      )}
      {!data && (
        <Typography
          component={"h2"}
          sx={{
            my: "1rem",
            textAlign: "center",
            fontSize: "1.3rem",
            color: "red",
          }}
        >
          something went wrong
        </Typography>
      )}
    </div>
  );
};

export default CarDetailsPage;
