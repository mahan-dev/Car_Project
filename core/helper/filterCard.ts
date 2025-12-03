// import { FetcherResponse } from "@/helper/dataFetcher";

// export const filterCards = (
//   price: number[],
//   cars: FetcherResponse[],
//   gearBox: string
// ): FetcherResponse[] => {
//   let result = [...cars];

//   if (!cars.length) return [];

//   if (price && price.length === 2) {
//     const [minPrice, maxPrice] = price;
//     if (!(minPrice === 0 && maxPrice === 0)) {
//       result = result.filter((item) => {
//         const price = +item.price;
//         return price >= minPrice && price <= maxPrice;
//       });
//     }
//   }

//   if (gearBox) {
//     result = result.filter((item) => item.gearbox === gearBox);
//   }

//   return result;
// };
import { FetcherResponse } from "@/helper/dataFetcher";

interface FilterProps {
  category: string;
  gearBox: string;
  finalData: FetcherResponse[];
}
export const filterCards = ({
  category,
  gearBox,
  finalData,
}: FilterProps): FetcherResponse[] => {
  let result = finalData;
  

  // if (!finalData?.length ) return [];

  // if (price && price.length === 2) {
  //   const [minPrice, maxPrice] = price;
  //   if (!(minPrice === 0 && maxPrice === 0)) {
  //     result = result.filter((item) => {
  //       const price = +item.price;
  //       return price >= minPrice && price <= maxPrice;
  //     });
  //   }
  // }

  if (category) result = result.filter((item) => item.category === category);
  if (gearBox) result = result.filter((item) => item.gearbox === gearBox);

  // if (gearBox) {
  //   result = result.filter((item) => item.gearbox === gearBox);
  // }

  return result;
};
