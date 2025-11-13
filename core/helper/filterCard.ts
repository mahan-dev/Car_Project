import { FetcherResponse } from "@/helper/dataFetcher";

export const filterCards = (
  price: number[],
  cars: FetcherResponse[]
): FetcherResponse[] => {
  if (!cars.length) return [];
  const minPrice = price[0];
  const maxPrice = price[1];
  if (minPrice === 0 && maxPrice === 0) {
    return cars;
  }
  return cars.filter(
    (item) => item.price >= minPrice && item.price <= maxPrice
  );
};
