export interface RegisterRequest {
  start_regis: string;
  hydra_id: string | null;
  phone_number: string;
  password: string;
  affiliate: string | null;
  clickid: string;
  is_bonus: number;
  referrer: string;
  // ip: string
  register_from: string;
  bank_type: string;
  bank_code: string;
  bank_number: string;
  bank_name: string;
  ref_token: string | null;
  ref_join: string | null;
}
