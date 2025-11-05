"use client";
import { FetcherResponse } from "@/helper/dataFetcher";
import RoomCard from "@/modules/RoomCard";
import { Typography } from "@mui/material";
import React from "react";

const page = () => {
  const data: FetcherResponse[] = JSON.parse(localStorage.getItem("whishList"));

  return (
    <div>
      {!!data.length ? (
        <RoomCard data={data} whishList={true} />
      ) : (
        <Typography
          sx={{ textAlign: "center", fontSize: "1.2rem", fontWeight:"bold" }}
          component={"h2"}
        >
          Nothing Found 🙁
        </Typography>
      )}
    </div>
  );
};

export default page;
