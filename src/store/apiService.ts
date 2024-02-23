import axios, { AxiosError } from "axios";
import type { AxiosInstance } from "axios";

const isDev = import.meta.env.MODE;
const URLDev = "https://chat-uat.thesonicblue.xyz";
const URL = `${isDev === "development" ? URLDev : location.origin}/api`;

const HOSTNAME = URL;

const api: AxiosInstance = axios.create({
  baseURL: HOSTNAME,
});

const storeToken =
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0N2ZmZmZmZDIyYmQwNDU5ZTM1Y2Q2YiIsInByZWZpeCI6IkBUeHFMV1p2NDBXIiwidXNlcm5hbWUiOiJnZ3Roa2siLCJuYW1lIjoiZ2d0aGtrIiwibGFzdF9uYW1lIjoiZ2d0aGtrIiwicGhvbmVfbnVtYmVyIjoiIiwiZnVsbF9uYW1lIjoiZ2d0aGtrIGdndGhrayIsImltZ191cmwiOiJodHRwczovL3JvY2tldHdpbm9mZmljZS5zMy5hcC1zb3V0aGVhc3QtMS5hbWF6b25hd3MuY29tL0NIQVRBTExJTk9ORS9pbWFnZS9nZ3Roa2svNjQ3ZmZmZmZkMjJiZDA0NTllMzVjZDZiIiwiYWN0aXZlIjp0cnVlLCJsYW5ndWFnZSI6IlRIIiwidXNlcl90eXBlIjoibWVtYmVyIiwiZXhwIjoxNzM4NDAxMzM4LCJpYXQiOjE3MDY3Nzg5MzgsImlzcyI6InN5c3RlbSJ9.bK3hiCCkQPegznjziddtPGeENZLIw7kpJBdjZtAj9Q4";
api.interceptors.request.use(
  (config) => {
    config.headers = config.headers || {};

    config.headers.Authorization = `${storeToken}`;

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (res) => {
    if (res?.data?.code === 401) {
      localStorage.removeItem("auth_token");
      window.location.href = "/login";
    }
    return res;
  },
  (err: AxiosError) => {
    if (err.response && err.response.status === 401) {
      localStorage.removeItem("auth_token");
      window.location.href = "/login";
    }
    return Promise.reject(err);
  }
);

export default api;
