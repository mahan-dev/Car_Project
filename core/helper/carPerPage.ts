import { FetcherResponse } from "@/helper/dataFetcher";

interface PageInterface {
  page: number;
  carData: { data: FetcherResponse[] } | FetcherResponse[];
}
export const pageHandler = ({ page, carData }: PageInterface) => {
  const data = Array.isArray(carData) ? carData : carData?.data;

  if (!data || data.length === 0) {
    return {
      cars: [],
      totalPage: 1,
    };
  }

  const carPerPage = 20;

  const startIndex = (page - 1) * carPerPage;

  const endIndex = startIndex + carPerPage;

  const currentCars = data.slice(startIndex, endIndex);

  const totalPage = Math.ceil(data.length / carPerPage);

  return {
    cars: currentCars,
    totalPage,
  };
};
