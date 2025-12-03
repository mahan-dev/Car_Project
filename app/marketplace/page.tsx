import React from "react";
import MarketPlace from "@/templates/MarketPlace";
import { Profile } from "@/models/profile";
import { connectDb } from "@/utils/connectDb";
import { filterCards } from "@/helper/filterCard";
import { FetcherResponse } from "@/helper/dataFetcher";

interface MarketPlaceProps {
  searchParams: Promise<{ category: string; gearBox: string }>;
}

const MarketPlacePage = async ({ searchParams }: MarketPlaceProps) => {
  const { category, gearBox } = await searchParams;
  await connectDb();
  const profile = await Profile.find({ published: true });

  const finalData: FetcherResponse[] = JSON.parse(JSON.stringify(profile));

  const res = filterCards({ category, gearBox, finalData });

  return <MarketPlace profile={res} />;
};

export default MarketPlacePage;
