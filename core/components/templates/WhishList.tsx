"use client";
import { FetcherResponse } from "@/helper/interface/dataFetcher/interface";
import RoomCard from "@/modules/RoomCard";
import { Button, Typography } from "@mui/material";
import React from "react";
const WhishList = () => {
  const data: FetcherResponse[] = JSON.parse(localStorage.getItem("whishList"));

  if (!data?.length)
    return (
      <div>
        <Typography
          sx={{
            textAlign: "center",
            fontSize: "1.2rem",
            mt: "3rem",
            fontWeight: "bold",
          }}
          component={"h2"}
        >
          Nothing Found 🙁
        </Typography>

        <Button
          variant="outlined"
          sx={{
            width: "200px",
            display: "flex",
            m: "0  auto",
            mt: "1rem",
          }}
          href="/show-room/"
        >
          Add +
        </Button>
      </div>
    );

  return <div>{data && <RoomCard data={data} />}</div>;
};

export default WhishList;
