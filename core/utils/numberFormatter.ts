const sp = (number: string | number): string => {
  const separatedNumber = number
    .toString()
    .match(/(\d+?)(?=(\d{3})+(?!\d)|$)/g);
  return separatedNumber.join(",");
};

export { sp };
