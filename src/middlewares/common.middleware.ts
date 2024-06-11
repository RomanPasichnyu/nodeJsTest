import { NextFunction, Request, Response } from "express";
import { isObjectIdOrHexString } from "mongoose";

import { ApiError } from "../api-error";
import { UserValidator } from "../validators/user.validator";

class CommonMiddleware {
  public isIdValid(req: Request, res: Response, next: NextFunction) {
    try {
      const id = req.params.userId;
      if (!isObjectIdOrHexString(id)) {
        throw new ApiError("bad id", 400);
      }
      next();
    } catch (e) {
      next(e);
    }
  }
  public isUserCreateBodyValid(
    req: Request,
    res: Response,
    next: NextFunction,
  ) {
    try {
      const { value, error } = UserValidator.create.validate(req.body);
      if (error) {
        throw new ApiError(error.details[0].message, 400);
      }
      req.body = value;
    } catch (e) {
      next(e);
    }
  }
  public isUserUpdateBodyValid(
    req: Request,
    res: Response,
    next: NextFunction,
  ) {
    try {
      const { value, error } = UserValidator.update.validate(req.body);
      if (error) {
        throw new ApiError(error.details[0].message, 400);
      }
      req.body = value;
    } catch (e) {
      next(e);
    }
  }
}

export const commonMiddleware = new CommonMiddleware();
