"use client";
import { useSearchParams } from "next/navigation";

export const AsideUseForm = () => {
  const searchParams = useSearchParams();
  const gearBoxUrl = searchParams.get("gearBox") ?? "";
  const carTypeUrl = searchParams.get("category") ?? "";

  const minPrice = +(searchParams.get("priceRange-min") ?? 0);
  const maxPrice = +(searchParams.get("priceRange-max") ?? 1000000);

  return {
    defaultValues: {
      gearBox: gearBoxUrl,
      category: carTypeUrl,
      // debounceValue: [0, 1000000],
      // range: [0, 1000000],
      priceRange: [minPrice, maxPrice],
    },
  };
};
