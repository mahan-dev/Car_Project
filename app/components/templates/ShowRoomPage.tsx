"use client";
import React, { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { dataFetcher } from "@/helper/dataFetcher";

import styles from "@/templates/styles/showRoom/route.module.css";
import RoomCard from "@/modules/RoomCard";
import { Pagination } from "@mui/material";
import { pageHandler } from "@/helper/carPerPage";
import { paginationHandler } from "@/helper/paginationHandler";
import { initialPage } from "@/helper/initialPage";

const ShowRoomPage = () => {
  const [page, setPage] = useState(1);

  const { data } = useQuery({
    queryKey: ["Cars"],
    queryFn: async () => await dataFetcher(),
  });

  const { totalPage } = pageHandler({ page, data });

  

  useEffect(() => {
    initialPage(page, setPage);
  }, [page]);

  return (
    <div className={styles.container}>
      {!data && (
        <p style={{ minHeight: "100vh", textAlign: "center" }}>
          something went wrong
        </p>
      )}
      {data && <RoomCard page={page} data={data} />}

      <div className={styles.container__footer}>
        {data && (
          <Pagination
            count={totalPage}
            page={page}
            siblingCount={0}
            boundaryCount={2}
            onChange={(event, value) => paginationHandler(page, setPage, value)}
          />
        )}
      </div>
    </div>
  );
};

export default ShowRoomPage;
