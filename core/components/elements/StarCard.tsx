"use client";
import React, { useState } from "react";
import { FetcherResponse } from "@/helper/dataFetcher";
import { whishListHandler } from "@/helper/whishList";
import { GoStarFill } from "react-icons/go";
import { FiStar } from "react-icons/fi";

const isWhishList = (modelName, makeId) => {
  const getList: FetcherResponse[] =
    JSON.parse(localStorage.getItem("whishList")) || [];
  const result = getList.some(
    (item) => item.model_name === modelName && item.model_make_id === makeId
  );

  return result;
};

interface StarProps {
  data: FetcherResponse;
}

const StarCard = ({ data }: StarProps) => {
  const [whishList, setWhishList] = useState<FetcherResponse[]>(() => {
    const data = localStorage.getItem("whishList");
    return data ? JSON.parse(data) : [];
  });

  return (
    <div>
      {isWhishList(data.model_name, data.model_make_id) ? (
        <GoStarFill
          style={{ color: "white" }}
          onClick={() => whishListHandler(data, { whishList, setWhishList })}
        />
      ) : (
        <FiStar
          style={{ color: "white" }}
          onClick={() => whishListHandler(data, { whishList, setWhishList })}
        />
      )}
    </div>
  );
};

export default StarCard;
