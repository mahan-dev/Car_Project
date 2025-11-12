import React from "react";
import CarDetailsPage from "@/templates/CarDetailsPage";

import { carDetail } from "@/helper/dataFetcher";
import { Profile } from "@/models/profile";
import { ProfileInterface } from "@/models/interface/profileSchema";

interface DetailProps {
  params: Promise<{ detailId: string }>;
}
const DetailPage = async ({ params }: DetailProps) => {
  const { detailId } = await params;
  console.log(detailId);

  const make = detailId[0];
  const model = detailId[1];

  const data = await carDetail(make, model);

  interface FinalData {
    [key: string]: string;
  }
  let finalData: ProfileInterface | FinalData = data || {};
  if (!data) {
    const profile = await Profile.findOne({
      model_name: model,
      model_make_id: make,
    }).select("-userId");
    if (!profile) return;
    finalData = JSON.parse(JSON.stringify(profile));
  }

  return <CarDetailsPage data={finalData} />;
};

export default DetailPage;
