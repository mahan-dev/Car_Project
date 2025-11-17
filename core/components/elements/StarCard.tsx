"use client";
import React, { Dispatch, SetStateAction } from "react";
import { FetcherResponse } from "@/helper/dataFetcher";
import { whishListHandler } from "@/helper/whishList";
import { GoStarFill } from "react-icons/go";
import { FiStar } from "react-icons/fi";
import styles from "@/elements/styles/starCard/route.module.css";
import { useSession } from "next-auth/react";
import toast from "react-hot-toast";

const isWhishList = (modelName: string, makeId: string) => {
  const getList: FetcherResponse[] =
    JSON.parse(localStorage.getItem("whishList")) || [];
  const result = getList.some(
    (item) => item.model_name === modelName && item.model_make_id === makeId
  );

  return result;
};

interface StarProps {
  data: FetcherResponse;
  whishList: FetcherResponse[];
  setWhishList: Dispatch<SetStateAction<FetcherResponse[]>>;
}

const StarCard = ({ data, whishList, setWhishList }: StarProps) => {
  const session = useSession();

  const starHandler = () => {
    if (session.status === "unauthenticated") {
      toast.error("please login first");
      return;
    }
    whishListHandler(data, { whishList, setWhishList });
  };

  return (
    <div className={styles.star}>
      {isWhishList(data.model_name, data.model_make_id) ? (
        <GoStarFill style={{ color: "white" }} onClick={starHandler} />
      ) : (
        <FiStar style={{ color: "white" }} onClick={starHandler} />
      )}
    </div>
  );
};

export default StarCard;
