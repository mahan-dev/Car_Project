"use client";
import React, { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { Button, Card, Typography } from "@mui/material";
import { FetcherResponse } from "@/helper/dataFetcher";
import styles from "@/modules/styles/roomCard/route.module.css";

import { TbListDetails } from "react-icons/tb";
import { pageHandler } from "@/helper/carPerPage";
import StarCard from "@/elements/StarCard";
import { WhishListHook } from "@/core/hooks/WhishList";

interface RoomCardProps {
  data: { data: FetcherResponse[] } | FetcherResponse[];
  page?: number;
}
const RoomCard = ({ page, data }: RoomCardProps) => {
  const carData = Array.isArray(data) ? data : data.data;
  const [WhishListDb, setWhishListDb] = useState<FetcherResponse[]>([]);

  const { cars } = pageHandler({ page, carData });

  const WhishListCallback = useCallback(() => {
    const save = localStorage.getItem("whishList");
    setWhishListDb(save ? JSON.parse(save) : []);
  }, []);

  const { whishList, setWhishList } = WhishListHook();

  const cardStatus = WhishListDb ? carData : cars;
  console.log(cardStatus)

  useEffect(() => {
    WhishListCallback();
  }, [whishList, WhishListCallback]);

  return (
    <section className={styles.container}>
      {carData &&
        cardStatus.map((item, index) => {
          const imagePath: string = item.model_make_id
            ? `/images/showRoom/${item.model_make_id.toLowerCase()}.jpg`
            : item.image;
          
          return (
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
              <StarCard
                data={item}
                whishList={whishList}
                setWhishList={setWhishList}
              />

              <Image
                className={styles.card__image}
                src={imagePath}
                alt={item.model_make_id?.toString() || "card_image"}
                priority
                sizes="100vw"
                width={200}
                height={200}
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
          );
        })}

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
