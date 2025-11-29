import React from "react";
import MarketPlace from "@/templates/MarketPlace";
import { Profile } from "@/models/profile";
import { connectDb } from "@/utils/connectDb";

const page = async () => {
  await connectDb();
  const profile = await Profile.find({published: true});

  return <MarketPlace profile={JSON.parse(JSON.stringify(profile))} />;
};

export default page;
