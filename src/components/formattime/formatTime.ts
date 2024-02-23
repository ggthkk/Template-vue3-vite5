import dayjs from "dayjs";

export const formatDateTime = (value: number | null): string => {
  return dayjs(value).format("DD-MM-YYYY HH:mm");
};

export const formatDate = (value: number | null): string => {
  return dayjs(value).format("DD-MM-YYYY");
};
export const formatTime = (value: number | null): string => {
  return dayjs(value).format("HH:mm");
};
