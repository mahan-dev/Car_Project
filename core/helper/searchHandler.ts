import { dataFetcher, FetcherResponse } from "@/helper/dataFetcher";
import toast from "react-hot-toast";

const carModels: string[] = ["bmw", "audi"];

interface SearchProps {
  debouncedValue: string;
  value: string;
}

export const searchHandler = async ({
  debouncedValue,
  value,
}: SearchProps): Promise<FetcherResponse[]> => {
  if (!debouncedValue.trim()) return;

  const { data } = await dataFetcher();
  try {
    const res = data.filter((car) => {
      const matchedModel = car.model_name
        .toLowerCase()
        .includes(value.toLowerCase());
      const validBrand = carModels.includes(car.model_make_id.toLowerCase());

      return matchedModel && validBrand;
    });
    console.log(res)
    return res;
  } catch (error) {
    toast.error("Something went wrong!", { duration: 2000 });
    console.log("error =>", error);
  }
};
