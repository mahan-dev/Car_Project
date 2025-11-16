import { FetcherResponse } from "@/helper/dataFetcher";

export const filterCards = (
  price: number[],
  cars: FetcherResponse[],
  gearBox: string
): FetcherResponse[] => {
  let result = [...cars];

  if (!cars.length) return [];

  if (price && price.length === 2) {
    const [minPrice, maxPrice] = price;
    if (!(minPrice === 0 && maxPrice === 0)) {
      result = result.filter(
        (item) => item.price >= minPrice && item.price <= maxPrice
      );
    }
  }

  if (gearBox) {
    result = result.filter((item) => item.gearbox === gearBox);
  }

  return result;
};
