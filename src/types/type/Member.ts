export type Member = {
  bank_list: BankMember[];
  date_regis: string;
  full_name: string;
  is_bonus: number;
  point: number;
  ref_link: string;
  username: string;
  wallet: number;
  wheel: number;
};

export type BankMember = {
  bank_code: string;
  bank_name: string;
  bank_number: string;
  status: number;
  active: number;
};

export type UserDetail = {
  username: string;
  date_regis: string;
  phone_number: string;
  password: string;
  full_name: string;
  bank_list: BankList[];
  token: string;
  active: number;
  user_type: string;
  is_bonus: number;
  point: number;
  wallet: number;
  wheel: number;
  Commission: number;
  hydra_id: string;
  device_type: string;
  profile_url: string;
  topup_status: number;
};

type BankList = {
  bank_code: string;
  bank_name: string;
  bank_number: string;
  status: number;
  active: number;
};

export type Turnover = {
  turntotal: number;
  turnagent: number;
  fixWithdraw: number;
  Withdrawfix: number;
  turnover_slot: boolean;
  is_withdraw: boolean;
  message: string;
  amount: number;
  bonus_name: string;
  limit_per_time: number;
  limit_per_day: number;
  withdrawal_remaining: number;
};
