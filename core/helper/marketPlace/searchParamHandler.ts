export const searchParamsHandler = (params) => {
  const res = Object.entries(params)
    .filter(([key]) => key.includes("priceRange"))
    .map(([_, value]) => +value);

  const min = res[0] ?? 0;
  const max = res[1] ?? 1000000;
  return {
    price: [min, max],
  };
};
