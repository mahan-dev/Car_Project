import React from "react";
import { FetcherResponse } from "@/helper/dataFetcher";
import RoomCard from "@/modules/RoomCard";
import styles from "@/templates/styles/marketPlace/route.module.css"

interface MarketPlaceInterface {
  profile: FetcherResponse[];
}

const MarketPlace = ({ profile }: MarketPlaceInterface) => {
    
  return (
    <section className={styles.container}>
      <RoomCard data={profile} />
    </section>
  );
};

export default MarketPlace;
