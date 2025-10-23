"use client";
import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { dataFetcher } from "@/helper/dataFetcher";

import styles from "@/templates/styles/showRoom/route.module.css";
import RoomCard from "@/modules/RoomCard";

const ShowRoomPage = () => {
  const [page, setPage] = useState(1);

  const { data } = useQuery({
    queryKey: ["Cars"],
    queryFn: async () => await dataFetcher(),
  });

  return (
    <div className={styles.container}>
      {data && <RoomCard page={page} data={data} />}
      <button onClick={() => setPage((prev) => page !== 1 && prev - 1)}>
        prev{" "}
      </button>
      <button onClick={() => setPage((prev) => prev + 1)}>next </button>
    </div>
  );
};

export default ShowRoomPage;
