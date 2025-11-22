import { dataFetcher, FetcherResponse } from "@/helper/dataFetcher";
import toast from "react-hot-toast";



interface SearchProps {
  debouncedValue: string;
  value: string;
}

export const searchHandler = async ({
  debouncedValue,
  value,
}: SearchProps): Promise<FetcherResponse[]> => {
  if (!debouncedValue.trim()) return;

 
};
