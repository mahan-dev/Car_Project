"use client";
import React from "react";
import Image from "next/image";
import { Button, Card, Typography } from "@mui/material";
import { FetcherResponse } from "@/helper/dataFetcher";
import styles from "@/modules/styles/roomCard/route.module.css";

import { TbListDetails } from "react-icons/tb";
import { pageHandler } from "@/helper/carPerPage";
import StarCard from "@/elements/StarCard";

interface RoomCardProps {
  data: { data: FetcherResponse[] } | FetcherResponse[];
  page?: number;
  whishList?: boolean;
}
const RoomCard = ({ page, data, whishList }: RoomCardProps) => {
  const carData = Array.isArray(data) ? data : data.data

  const { cars } = pageHandler({ page, carData });


  const cardStatus = whishList ? carData : cars;

  return (
    <section className={styles.container}>
      {carData &&
        cardStatus.map((item, index) => (
          <Card
            key={index}
            sx={{
              width: "200px",
              boxShadow: "0 0 12px rgba(0,0,0,0.1)",
              overflow: "hidden",
              position: "relative",
            }}
            className={styles.card}
          >
            <div style={{ position: "absolute", top: "5px", left: "5px" }}>
              <StarCard data={item} />
            </div>
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
                sx={{ bgcolor: "black", color: "white", padding: "0.3rem 0" }}
              >
                <TbListDetails />
              </Button>
            </span>
          </Card>
        ))}

      {!carData.length && !whishList &&(
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
