"use client";
import { useRouter, useSearchParams } from "next/navigation";

const SearchParamsHandler = () => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const setParam = (inputName: string, value: string | number[]) => {
    const params = new URLSearchParams(Array.from(searchParams.entries()));
    if (Array.isArray(value)) {
      const [minPrice, maxPrice] = value;

      params.set(`${inputName}-min`, String([minPrice]));
      params.set(`${inputName}-max`, String([maxPrice]));
      params.set("page", "1");
    } else {
      params.set(inputName, value);
      params.set("page", "1");
    }

    router.push(`/marketplace?${params.toString()}`);
  };
  return { setParam };
};

export default SearchParamsHandler;
