import { searchHandler } from "@/helper/searchHandler";
import { FetcherResponse } from "@/helper/dataFetcher";

export const SearchQuery = async (
  debouncedValue: string,
  value: string
): Promise<FetcherResponse[]> => {
  if (!debouncedValue) return [];
  return await searchHandler({ debouncedValue, value });
};
