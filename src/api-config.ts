import axios, { type AxiosError, type AxiosInstance } from "axios";
import { getActivePinia } from "pinia";
import { authentication } from "@/stores/auth";

const isDev = import.meta.env.MODE;
const URLDev = "http://192.168.1.101:5053";
const URL = isDev === "development" ? URLDev : `${location.origin}/api`;
const HOSTNAME = URL;

const api: AxiosInstance = axios.create({
  baseURL: HOSTNAME,
});

declare module "axios" {
  interface AxiosRequestConfig {
    token?: boolean;
    formdata?: boolean;
  }
}

api.interceptors.request.use(
  (config) => {
    const pinia = getActivePinia();
    const authStore = authentication(pinia);

    if (config.token) {
      config.headers.Authorization = authStore.$state.token;

      config.data = {
        ...config.data,
        username: authStore.$state.user?.username,
      };
    }

    if (config.formdata) {
      config.headers["Content-Type"] = "multipart/form-data";
      config.headers.Authorization = authStore.$state.token;

      config.data.append("username", authStore.$state.user?.username);
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (res) => {
    return res;
  },
  (err: AxiosError) => {
    return Promise.reject(err);
  }
);

export default api;
