import { FetcherResponse } from "@/helper/dataFetcher";

export const isInWhishList = (modelName: string, makeId: string): boolean => {
  const getList: FetcherResponse[] =
    JSON.parse(localStorage.getItem("whishList")) || [];
  const result = getList.some(
    (item) => item.model_name === modelName && item.model_make_id === makeId
  );

  return result;
};
