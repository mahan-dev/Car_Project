import React from "react";
import Image from "next/image";
import { Card } from "@mui/material";
import { Car } from "@/helper/dataFetcher";
import styles from "@/modules/styles/roomCard/route.module.css";

const RoomCard = ({ data }: Car) => {
  return data.map((item) => (
    <Card
      key={item.id}
      sx={{ width: "200px", boxShadow: "0 0 12px rgba(0,0,0,0.1)" }}
      className={styles.card}
    >
      <div key={item.id}>
        <span>{item.make}</span>

        <Image
        className={styles.card__image}
          src={`/images/showRoom/${item.make}.jpg`}
          sizes="100vw"
          width={200}
          height={110}
          style={{ width: "100%", height: "200px" }}
          alt={item.name}
        />

        <span>model {item.name}</span>
      </div>
    </Card>
  ));
};

export default RoomCard;
