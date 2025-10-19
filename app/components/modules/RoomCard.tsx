import React, { useEffect } from "react";
import Image from "next/image";
import { Button, Card } from "@mui/material";
import { FetcherResponse } from "@/helper/dataFetcher";
import styles from "@/modules/styles/roomCard/route.module.css";

import { TbListDetails } from "react-icons/tb";

interface RoomCardProps {
  Models: FetcherResponse[];
}
const RoomCard = ({ Models }: RoomCardProps) => {
  console.log(Models);

  return (
    <>
      {Models &&
        Models.map((item) => (
          <Card
            key={item.model_name}
            sx={{ width: "200px", boxShadow: "0 0 12px rgba(0,0,0,0.1)" }}
            className={styles.card}
          >
            <Image
              className={styles.card__image}
              src={`/images/showRoom/${item.model_make_id.toLowerCase()}.jpg`}
              sizes="100vw"
              width={200}
              height={110}
              style={{ width: "100%", height: "200px" }}
              alt={item.model_make_id.toString()}
            />

            <span className={styles.card__details}>
              <p>
                {item.model_make_id} {item.model_name}
              </p>

              <Button
                href={`/detail/${item.model_name}`}
                className={styles.card__button}
                sx={{ bgcolor: "black", color: "white" }}
              >
                <TbListDetails />
              </Button>
            </span>
          </Card>
        ))}
    </>
  );
};

export default RoomCard;
