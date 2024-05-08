import express, { NextFunction, Request, Response } from "express";

import { ApiError } from "./api-error";
import { reader, writer } from "./fs.service";
import { IUser } from "./user.interface";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req: Request, res: Response) => {
  res.send("hello world");
});

app.get("/users", async (req: Request, res: Response) => {
  const users = await reader();
  res.json(users);
});

app.post("/users", async (req: Request, res: Response) => {
  try {
    const { name } = req.body;
    const users = await reader();

    const newUser: IUser = { id: users[users.length - 1].id + 1, name };
    users.push(newUser);
    await writer(users);
    res.status(201).json(newUser);
  } catch (e) {
    res.status(400).json(e.message);
  }
});

app.get(
  "/users/:userId",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const userId = Number(req.params.userId);
      const users = await reader();
      const user = users.find((user) => user.id === userId);
      if (!user) {
        throw new ApiError("no user by id", 404);
      }
      res.json(user);
    } catch (e) {
      next(e);
    }
  },
);

app.delete(
  "/users/:userId",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const userId = Number(req.params.userId);
      const users = await reader();

      const index = users.findIndex((user) => user.id === userId);
      if (index === -1) {
        throw new ApiError("no user by id", 404);
      }
      users.splice(index, 1);
      await writer(users);
      res.sendStatus(204);
    } catch (e) {
      next(e);
    }
  },
);

app.put(
  "/users/:userId",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { name } = req.body;
      const userId = Number(req.params.userId);
      const users = await reader();

      const index = users.findIndex((user) => user.id === userId);
      if (index === -1) {
        throw new ApiError("no user by id", 404);
      }
      users[index] = { ...users[index], name };
      await writer(users);
      res.status(201).json(users[index]);
    } catch (e) {
      next(e);
    }
  },
);

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
