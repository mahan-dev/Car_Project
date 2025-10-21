export const objectHelper = (value: string | null) => {
  return value === "" || value == null ? "null" : value;
};
