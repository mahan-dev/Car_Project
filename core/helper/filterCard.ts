import { FetcherResponse } from "@/helper/dataFetcher";

export const filterCards = (
  price: number[],
  cars: FetcherResponse[],
  gearBox: string
): FetcherResponse[] => {
  console.log(gearBox);
  console.log(price);

  let result = cars;

  if (!cars.length) return [];

  if (price) {
    const minPrice = price[0];
    const maxPrice = price[1];
    if (!(minPrice === 0 && maxPrice === 0)) {
      result = cars.filter(
        (item) => item.price >= minPrice && item.price <= maxPrice
      );
    }
  }

  if (gearBox) {
    return cars.filter((item) => item.gearbox === gearBox);
  }
  return result;
};
