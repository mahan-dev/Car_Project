"use client";
import React, { SetStateAction, useState } from "react";
import Image from "next/image";
import { Button, Card, Typography } from "@mui/material";
import { FetcherResponse } from "@/helper/dataFetcher";
import styles from "@/modules/styles/roomCard/route.module.css";

import { TbListDetails } from "react-icons/tb";

interface RoomCardProps {
  data: { data: FetcherResponse[] };
  page: number;
}
const RoomCard = ({ page , data }: RoomCardProps) => {
  const carData = data.data;


  const carPerPage = 20;

  const startIndex = (page - 1) * carPerPage;
  const endIndex = startIndex + carPerPage;

  const currentCars = data.data.slice(startIndex, endIndex);


  const totalPage = Math.ceil(data.data.length / carPerPage);



  return (
    <section style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
      {carData &&
        currentCars.map((item, index) => (
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
        <Typography sx={{ fontSize: "1.2rem" }} component={"p"}>
          something went wrong 🙁
        </Typography>
      )}
    </section>
  );
};

export default RoomCard;
