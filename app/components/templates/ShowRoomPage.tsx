"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import { useQuery } from "@tanstack/react-query";

import { dataFetcher } from "@/helper/dataFetcher";
import { Card } from "@mui/material";
import styles from "@/templates/styles/showRoom/route.module.css";

const ShowRoomPage = () => {
  const { data } = useQuery({
    queryKey: ["Cars"],
    queryFn: async () => dataFetcher(),
  });
  console.log(data);

  useEffect(() => {}, []);

  return (
    <div className={styles.container}>
      <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
        {data &&
          data.map((item) => (
            <Card
              key={item.id}
              sx={{ width: "200px", boxShadow: "0 0 12px rgba(0,0,0,0.1)" }}
            >
              <ul key={item.id}>
                <li>{item.make}</li>
                <div>
                  <Image
                    src={`/images/showRoom/${item.make}.jpg`}
                    width={150}
                    height={150}
                    alt={item.name}
                  />
                </div>
                <span>model {item.name}</span>
              </ul>
            </Card>
          ))}
      </div>
    </div>
  );
};

export default ShowRoomPage;
