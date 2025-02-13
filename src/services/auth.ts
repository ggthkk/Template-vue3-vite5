import api from "@/api-config";

import * as T from "@/types";

class AuthService {
  public async login(
    phone_number: string,
    password: string
  ): Promise<T.Response> {
    try {
      const res = await api({
        method: "POST",
        url: `/login`,
        data: {
          phone_number,
          password,
        },
      });
      return res.data;
    } catch (error: any) {
      const err = error.response?.data;
      return err;
    }
  }

  public async loginToken(
    phone_number: string,
    token: string
  ): Promise<T.Response> {
    try {
      const res = await api({
        method: "POST",
        url: `/loginbytoken`,
        data: {
          phone_number,
          token,
        },
      });
      return res.data;
    } catch (error: any) {
      const err = error.response?.data;
      return err;
    }
  }

  public async loginLine(
    code: string,
    url: string,
    ref_join: string,
    ref_token: string,
    hydra_id: string
  ): Promise<T.Response> {
    try {
      const res = await api({
        method: "POST",
        url: `/login_line`,
        data: {
          code,
          url,
          ref_join,
          ref_token,
          hydra_id,
        },
      });
      return res.data;
    } catch (error: any) {
      const err = error.response?.data;
      return err;
    }
  }

  public async isLogin(): Promise<T.Response> {
    try {
      const res = await api({
        method: "POST",
        url: `/is_login`,
        token: true,
      });
      return res.data;
    } catch (error: any) {
      const err = error.response?.data;
      return err;
    }
  }

  public async logout(): Promise<T.Response> {
    try {
      const res = await api({
        method: "POST",
        url: `/logout`,
        token: true,
      });
      return res.data;
    } catch (error: any) {
      const err = error.response?.data;
      return err;
    }
  }

  public async requestOtp(
    phone_number: string,
    register_type: string | ""
  ): Promise<T.Response> {
    try {
      const res = await api({
        method: "POST",
        url: `/otp`,
        token: true,
        data: {
          phone_number,
          register_type,
        },
      });
      return res.data;
    } catch (error: any) {
      const err = error.response?.data;
      return err;
    }
  }

  public async verifyOtp(
    otp_code: string,
    phone_number: string | ""
  ): Promise<T.Response> {
    try {
      const res = await api({
        method: "POST",
        url: `/get/otp`,
        data: {
          otp_code,
          phone_number,
        },
      });
      return res.data;
    } catch (error: any) {
      const err = error.response?.data;
      return err;
    }
  }

  public async verifyOtpInside(
    phone_number: string,
    otp_code: string,
    line_user_id: string | "",
    register_type: string
  ): Promise<T.Response> {
    try {
      const res = await api({
        method: "POST",
        url: `/get/otp_main`,
        data: {
          phone_number,
          otp_code,
          line_user_id,
          register_type,
        },
        token: true,
      });
      return res.data;
    } catch (error: any) {
      const err = error.response?.data;
      return err;
    }
  }

  public async register(payload: T.RegisterRequest): Promise<T.Response> {
    try {
      const res = await api({
        method: "POST",
        url: `/register`,
        data: {
          ...payload,
        },
      });
      return res.data;
    } catch (error: any) {
      const err = error.response?.data;
      return err;
    }
  }
}

export default new AuthService();
