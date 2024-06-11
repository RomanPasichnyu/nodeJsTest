import { Router } from "express";

import { userController } from "../controllers/user.controller";
import { commonMiddleware } from "../middlewares/common.middleware";

const router = Router();

router.get("/", userController.getList);
router.post("/", commonMiddleware.isUserCreateBodyValid, userController.create);

router.get("/:userId", commonMiddleware.isIdValid, userController.getById);
router.put(
  "/",
  commonMiddleware.isIdValid,
  commonMiddleware.isUserUpdateBodyValid,
  userController.updateById,
);
router.delete("/", commonMiddleware.isIdValid, userController.deleteById);
export const userRouter = router;
