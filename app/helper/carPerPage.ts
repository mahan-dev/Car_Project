import { FetcherResponse } from "@/helper/dataFetcher";

interface PageInterface {
  page: number;
  data: { data: FetcherResponse[] };
}
export const pageHandler = ({ page, data }: PageInterface) => {
  const carPerPage = 20;

  console.log(page)

  const startIndex = (page - 1) * carPerPage;
  const endIndex = startIndex + carPerPage;

  const currentCars = data?.data.slice(startIndex, endIndex);

  const totalPage = Math.ceil(data?.data.length / carPerPage);

  return {
    cars: currentCars,
    totalPage,
  };
};
