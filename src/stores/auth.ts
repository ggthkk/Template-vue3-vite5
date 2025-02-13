import { ref, reactive } from "vue";
import { defineStore } from "pinia";
import { useRouter, useRoute } from "vue-router";
import * as T from "@/types";
import AuthService from "@/services/auth";

export const authentication = defineStore(
  "auth",
  () => {
    const route = useRoute();
    const router = useRouter();
    const user = ref<T.UserDetail | null>();
    const checkNewMember = ref(false);
    const token = ref<string | null>("");
    const loggedIn = ref(false);
    const redirect = reactive({
      login: "login",
      logout: "login",
      home: "home",
    });
    const formStorage = ref<{
      hydra_id: string | null;
      aff_token: string | null;
      clickid: string | null;
    }>({
      hydra_id: null,
      aff_token: null,
      clickid: null,
    });

    function setUser(data: T.UserDetail | undefined) {
      user.value = data;
    }

    function setCheckNewMember(value: boolean) {
      checkNewMember.value = value;
    }

    function setLocalUser(data: T.UserDetail | undefined) {
      localStorage.setItem("def-user", JSON.stringify(data));
    }

    function getLocalUser(): T.UserDetail {
      return JSON.parse(localStorage.getItem("def-user") as string);
    }

    function setToken(dataToken: string | null) {
      token.value = dataToken;
    }

    function setLocalToken(dataToken: string) {
      localStorage.setItem("token", dataToken);
    }

    function getLocalToken(): string {
      return localStorage.getItem("token") as string;
    }

    function setAff(
      token: string | null,
      hid: string | null,
      clickid: string | null
    ) {
      formStorage.value.aff_token = token;
      formStorage.value.hydra_id = hid;
      formStorage.value.clickid = clickid;
    }

    async function login(
      phone_number: string,
      password: string
    ): Promise<T.Response | false> {
      loggedIn.value = false;
      try {
        const res = await AuthService.login(phone_number, password);
        if (res?.message?.code === 0) {
          setUser(res.data.user_detail);
          setLocalUser(res.data.user_detail);
          setToken(res.data.token);
          setLocalToken(res.data.token);
          loggedIn.value = true;
          const data = await fetchUser();
          router.push({ name: redirect.home });
          return data;
        }
        return res;
      } catch (error) {
        console.log(error);
        return error as T.Response;
      }
    }

    async function loginToken(phone_number: string, token: string) {
      loggedIn.value = false;
      try {
        const res = await AuthService.loginToken(phone_number, token);
        if (res?.message?.code === 0) {
          setUser(res.data.user_detail);
          setLocalUser(res.data.user_detail);
          setToken(res.data.token);
          setLocalToken(res.data.token);
          loggedIn.value = true;
          const data: T.Response | false = await fetchUser();
          router.push({ name: redirect.home });
          return data;
        }
        return res;
      } catch (error) {
        console.log(error);
        return error as T.Response;
      }
    }

    async function loginLine(
      code: string,
      url: string,
      ref_join: string,
      ref_token: string,
      hydra_id: string
    ) {
      loggedIn.value = false;
      try {
        const res = await AuthService.loginLine(
          code,
          url,
          ref_join,
          ref_token,
          hydra_id
        );
        if (res?.message?.code == 0) {
          setUser(res.data.user_detail);
          setLocalUser(res.data.user_detail);
          setToken(res.data.token);
          setLocalToken(res.data.token);
          loggedIn.value = true;
          const data = await fetchUser();
          router.push({ name: redirect.home });
          return data;
        }
        return res;
      } catch (error) {
        console.log(error);
        return error as T.Response;
      }
    }

    async function fetchUser() {
      try {
        const localToken = getLocalToken();
        setToken(localToken);
        const localUser = getLocalUser();
        setUser(localUser);

        if (!localToken && !localUser) return false;

        const res = await AuthService.isLogin();
        if (res?.message?.code == 0) {
          setUser(res.data.user_detail);
          setLocalUser(res.data.user_detail);
          loggedIn.value = true;
          setToken(res.data.token);
          setLocalToken(res.data.token);
          return res;
        } else {
          clearSession();
          router.push({ name: redirect.home, query: route.query });
          return res;
        }
      } catch (error) {
        if (!loggedIn.value && route.meta.auth) {
          router.push({ name: redirect.home, query: route.query });
        }
        return error as T.Response;
      }
    }

    async function logout() {
      await AuthService.logout();
      clearSession();
      router.push({ name: redirect.home, query: route.query });
    }

    function clearSession() {
      const vtk_phone = localStorage.getItem("phone_number");
      const vtk_pass = localStorage.getItem("password");

      localStorage.clear();

      if (vtk_phone) localStorage.setItem("phone_number", vtk_phone);
      if (vtk_pass) localStorage.setItem("password", vtk_pass);

      token.value = null;
      user.value = null;
      loggedIn.value = false;
    }

    return {
      user,
      checkNewMember,
      token,
      loggedIn,
      formStorage,
      login,
      loginToken,
      loginLine,
      fetchUser,
      logout,
      setCheckNewMember,
      setAff,
    };
  },
  { persist: true }
);
