import { Model } from "mongoose";

export type ISignUp = {

  name?: string;
  email?: string;
  password: string;

};


export type SignUpModel = Model<ISignUp, Record<string, unknown>>;

