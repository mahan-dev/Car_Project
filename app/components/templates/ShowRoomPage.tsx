"use client";
import React from "react";
import { useQuery } from "@tanstack/react-query";
import { dataFetcher } from "@/helper/dataFetcher";

import styles from "@/templates/styles/showRoom/route.module.css";
import RoomCard from "@/modules/RoomCard";

const ShowRoomPage = () => {
  const { data } = useQuery({
    queryKey: ["Cars"],
    queryFn: async () => await dataFetcher() ,
  });

  return (
    <div className={styles.container}>{data && <RoomCard data={data} />}</div>
  );
};

export default ShowRoomPage;
