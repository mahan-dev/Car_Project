import { carDetail } from "@/app/helper/dataFetcher";
import React from "react";

interface DetailProps {
  params: Promise<{ detailId: string }>;
}
const DetailPage = async ({ params }: DetailProps) => {
  const { detailId } = await params;
  const make = detailId[0];
  const model = detailId[1];

  const data = await carDetail(make, model);
  return (
    <div>
      <h2>{data.make_country}</h2>
      <h2>{data.make_display}</h2>
    </div>
  );
};

export default DetailPage;
