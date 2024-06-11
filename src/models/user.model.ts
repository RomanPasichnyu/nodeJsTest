import mongoose from "mongoose";

import { RoleEnum } from "../enums/role.enum";
import { IUser } from "../user.interface";

const userSchema = new mongoose.Schema(
  {
    name: { type: String, require: true },
    email: { type: String, require: true, unique: true },
    phone: { type: String, require: false },
    password: { type: String, require: true },
    age: { type: Number, require: false },
    role: { type: String, enum: RoleEnum, default: RoleEnum.USER },
    isDeleted: { type: Boolean, default: false },
    isVerified: { type: Boolean, default: false },
  },
  { timestamps: true, versionKey: false },
);

export const User = mongoose.model<IUser>("users", userSchema);
