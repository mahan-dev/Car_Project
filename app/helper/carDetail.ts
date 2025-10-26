export const objectHelper = (value: string, unit?: string) => {
  return value === "" || value == null
    ? "null"
    : value + `${unit ? ` ${unit}` : ""}`;
};
