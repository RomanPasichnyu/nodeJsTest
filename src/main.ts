import express, { NextFunction, Request, Response } from "express";

import { ApiError } from "./api-error";
import { userRouter } from "./routers/user.router";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/users", userRouter);

app.use(
  "*",
  (err: ApiError, req: Request, res: Response, next: NextFunction) => {
    return res.status(err.status || 500).json(err.message);
  },
);

process.on("uncaughtException", () => {
  console.error("uncaughtException:", Error);
  process.exit(1);
});

app.listen(3001, "0.0.0.0", () => {
  console.log("serverWorking at http://0.0.0.0:3001/");
});
