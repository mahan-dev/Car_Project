import React from "react";
import MarketPlace from "@/templates/MarketPlace";
import { Profile } from "@/models/profile";
import { connectDb } from "@/utils/connectDb";
import { filterCards } from "@/helper/filterCard";
import { FetcherResponse } from "@/helper/interface/dataFetcher/interface";
import { searchParamsHandler } from "@/helper/marketPlace/searchParamHandler";

interface MarketPlaceProps {
  searchParams: Promise<{
    category: string;
    gearBox: string;
    "priceRange-min": number[];
    "priceRange-max": number[];
  }>;
}

const MarketPlacePage = async ({ searchParams }: MarketPlaceProps) => {
  const params = await searchParams;
  const { category, gearBox } = await searchParams;

  const { price } = searchParamsHandler(params);

  await connectDb();
  const profile = await Profile.find({ published: true });


  const finalData: FetcherResponse[] = JSON.parse(JSON.stringify(profile));

  const res = filterCards({ category, gearBox, price, finalData });

  return <MarketPlace profile={res} />;
};

export default MarketPlacePage;
