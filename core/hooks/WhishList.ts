"use client";
import { useState } from "react";
import { FetcherResponse } from "@/helper/interface/dataFetcher/interface";

export const WhishListHook = () => {
  const [whishList, setWhishList] = useState<FetcherResponse[]>(() => {
    const save = localStorage.getItem("whishList");
    return save ? JSON.parse(save) : [];
  });

  return {
    whishList,
    setWhishList,
  };
};
