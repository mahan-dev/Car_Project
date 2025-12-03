import { FetcherResponse } from "@/helper/dataFetcher";

interface FilterProps {
  debounce?: number[];
  category?: string;
  gearBox?: string;
  cars?: FetcherResponse[];
  finalData?: FetcherResponse[];
}
export const filterCards = ({
  debounce,
  category,
  cars,
  gearBox,
  finalData,
}: FilterProps): FetcherResponse[] => {
  let result = finalData || cars;

  if (!!cars?.length && !!finalData?.length) return;

  if (debounce && debounce.length === 2) {
    const [minPrice, maxPrice] = debounce;
    if (!(minPrice === 0 && maxPrice === 0)) {
      result = result.filter((item) => {
        const price = +item.price;
        return price >= minPrice && price <= maxPrice;
      });
    }
  }
  if (category) result = result.filter((item) => item.category === category);

  if (gearBox) result = result.filter((item) => item.gearbox === gearBox);

  return result;
};
