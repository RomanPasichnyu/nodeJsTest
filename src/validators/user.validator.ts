import joi from "joi";

import { regexConstant } from "../constants/regex.constant";

export class UserValidator {
  public static create = joi.object({
    name: joi.string().min(3).max(25).required(),
    email: joi.string().regex(regexConstant.EMAIL).required(),
    password: joi.string().regex(regexConstant.PASSWORD).required(),
    phone: joi.string().regex(regexConstant.PHONE),
    age: joi.number().min(18).max(99),
  });
  public static update = joi.object({
    name: joi.string().min(3).max(25).required(),
    phone: joi.string().regex(regexConstant.PHONE),
    age: joi.number().min(18).max(99),
  });
}
