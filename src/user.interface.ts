import { RoleEnum } from "./enums/role.enum";

export interface IUser {
  _id: string;
  name: string;
  phone: string;
  role: RoleEnum;
  age: number;
  isDeleted: boolean;
  isVerified: boolean;
}
