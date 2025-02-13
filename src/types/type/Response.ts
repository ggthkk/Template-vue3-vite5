export type Response = {
  data: any;
  message: Message;
  status: Status;
  code: number;
};

export type ResponseTypeRecieve<T> = {
  data: T;
  message: Message;
  status: Status;
  code: number;
};

export type Message = {
  code: number;
  message: string;
};

export type Status = {
  code: number;
  message: string;
};

export interface Request {
  query?: any;
  param?: any;
  body?: any;
}
