import { FetcherResponse } from "@/helper/dataFetcher";
import { Dispatch, SetStateAction } from "react";

export const filterCards = (
  price: number[],
  cars: FetcherResponse[],
  gearBox: string,
  reset: boolean,
  setReset: Dispatch<SetStateAction<boolean>>
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

  if (reset) {
    setReset(false);
    return cars;
  }

  return result;
};
