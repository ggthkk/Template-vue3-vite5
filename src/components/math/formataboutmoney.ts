export const parse = (input: string): number | null => {
  const nums = input.replace(/,/g, "").trim();
  if (/^\d+(\.(\d+)?)?$/.test(nums)) return Number(nums);
  return nums === "" ? null : Number.NaN;
};

export const format = (value: number | null): string => {
  if (value === null) return "";
  return value.toLocaleString("en-US");
};
export const formatCredit = (value: any) => {
  if (value !== null && value !== undefined) {
    const roundedValue = Math.floor(value * 100) / 100;

    return roundedValue.toLocaleString("th-TH", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  } else {
    return "";
  }
};
