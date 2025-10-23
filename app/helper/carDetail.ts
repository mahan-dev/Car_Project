
export const objectHelper = (value: string, unit?: string) => {
  console.log(unit);
  return value === "" || value == null
    ? "null"
    : value + `${unit ? ` ${unit}` : ""}`;
};
