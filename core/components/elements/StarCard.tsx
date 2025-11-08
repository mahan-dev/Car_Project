"use client";
import React, { Dispatch, SetStateAction, useState } from "react";
import { FetcherResponse } from "@/helper/dataFetcher";
import { whishListHandler } from "@/helper/whishList";
import { GoStarFill } from "react-icons/go";
import { FiStar } from "react-icons/fi";
import styles from "@/elements/styles/starCard/route.module.css"

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
  whishList: FetcherResponse[]
  setWhishList: Dispatch<SetStateAction<FetcherResponse[]>>
}

const StarCard = ({ data, whishList, setWhishList }: StarProps) => {


  return (
    <div className={styles.star}> 
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
