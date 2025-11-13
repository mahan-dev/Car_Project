import CarDetailsPage from "@/templates/CarDetailsPage";
import { ProfileInterface } from "@/models/interface/profileSchema";
import { carDetail } from "@/helper/dataFetcher";

interface DetailProps {
  params: Promise<{ detailId: string }>;
}

interface resultInterface {
  [key: string]: string & Partial<ProfileInterface>;
}

const DetailPage = async ({ params }: DetailProps) => {
  const { detailId } = await params;

  const make = detailId[0];
  const model = detailId[1];

  const data = await carDetail(make, model);

  const result: resultInterface = JSON.parse(JSON.stringify(data));

  return <CarDetailsPage data={result} />;
};

export default DetailPage;
