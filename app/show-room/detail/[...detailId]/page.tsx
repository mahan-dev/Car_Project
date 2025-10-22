import React from "react";
import CarDetailsPage from "@/templates/CarDetailsPage";

import { carDetail } from "@/helper/dataFetcher";

interface DetailProps {
  params: Promise<{ detailId: string }>;
}
const DetailPage = async ({ params }: DetailProps) => {
  const { detailId } = await params;

  const make = detailId[0];
  const model = detailId[1];

  const data = await carDetail(make, model);
  return <CarDetailsPage data={data} />;
};

export default DetailPage;
