import axios, { type AxiosError, type AxiosInstance } from "axios";
import { getActivePinia } from "pinia";
//import { useAuthStore } from "@/stores/auth";

const isDev = import.meta.env.MODE;
//const URLDev = 'https://pglobby-dev.sunnygreen.online'
//const URLDev = 'https://bumblebee-dev.uppicture.online'
const URLDev = "https://tangtem-dev.sunnygreen.online";

const HOSTNAME = `${isDev === "development" ? URLDev : location.origin}/api`;

const api: AxiosInstance = axios.create({
  baseURL: HOSTNAME,
});

declare module "axios" {
  interface AxiosRequestConfig {
    token?: boolean;
    formdata?: boolean;
  }
}

//api.interceptors.request.use(
//  (config) => {
//    const pinia = getActivePinia();
//    const authStore = useAuthStore(pinia);

//    if (config.token) {
//      config.headers.Authorization = authStore.$state.token;

//      config.data = {
//        ...config.data,
//        username: authStore.$state.user?.username,
//      };
//    }

//    if (config.formdata) {
//      config.headers["Content-Type"] = "multipart/form-data";
//      config.headers.Authorization = authStore.$state.token;
//      config.data.append("username", authStore.$state.user?.username);
//    }

//    return config;
//  },
//  (error) => {
//    return Promise.reject(error);
//  }
//);

api.interceptors.response.use(
  (res) => {
    return res;
  },
  (err: AxiosError) => {
    return Promise.reject(err);
  }
);

export default api;
