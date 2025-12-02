import React from "react";
import MarketPlace from "@/templates/MarketPlace";
import { Profile } from "@/models/profile";
import { connectDb } from "@/utils/connectDb";

interface MarketPlaceProps {
  searchParams: Promise<{ category: string; gearBox: string }>;
}

const MarketPlacePage = async ({ searchParams }: MarketPlaceProps) => {
  const { category, gearBox } = await searchParams;
  await connectDb();
  const profile = await Profile.find({ published: true });


  let finalData = profile;

  if (category)
    finalData = profile.filter((item) => item.category === category);
  if (gearBox) finalData = profile.filter((item) => item.gearbox === gearBox);

  return <MarketPlace profile={JSON.parse(JSON.stringify(finalData))} />;
};

export default MarketPlacePage;
