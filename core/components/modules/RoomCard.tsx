"use client";
import React from "react";
import Image from "next/image";
import { Button, Card, Typography } from "@mui/material";
import { FetcherResponse } from "@/helper/dataFetcher";
import styles from "@/modules/styles/roomCard/route.module.css";

import { TbListDetails } from "react-icons/tb";
import { pageHandler } from "@/helper/carPerPage";

interface RoomCardProps {
  data: { data: FetcherResponse[] };
  page: number;
}
const RoomCard = ({ page, data }: RoomCardProps) => {
  const carData = data.data;

  const { cars } = pageHandler({ page, data });

  return (
    <section className={styles.container}>
      {carData &&
        cars.map((item, index) => (
          <Card
            key={index}
            sx={{
              width: "200px",
              boxShadow: "0 0 12px rgba(0,0,0,0.1)",
              overflow: "hidden",
            }}
            className={styles.card}
          >
            <Image
              className={styles.card__image}
              src={`/images/showRoom/${item.model_make_id.toLowerCase()}.jpg`}
              alt={item.model_make_id.toString()}
              priority
              width={200}
              height={200}
              style={{
                objectFit: "cover",
              }}
            />

            <span className={styles.card__details}>
              <p>
                {item.model_make_id} {item.model_name}
              </p>

              <Button
                href={`show-room/detail/${item.model_make_id}/${item.model_name}`}
                className={styles.card__button}
                sx={{ bgcolor: "black", color: "white" }}
              >
                <TbListDetails />
              </Button>
            </span>
          </Card>
        ))}

      {!carData.length && (
        <Typography
          sx={{ width: "100%", fontSize: "1.2rem", textAlign: "center" }}
          component={"p"}
        >
          something went wrong 🙁
        </Typography>
      )}
    </section>
  );
};

export default RoomCard;
