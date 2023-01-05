import express from "express";
import { editUserController, deleteUserController } from "../controllers/userController";

const userRouter = express.Router();

userRouter.get("/edit", editUserController);
userRouter.get("/delete", deleteUserController);

export default userRouter;