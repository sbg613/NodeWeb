import express from "express";
import { homeController, joinController } from "../controllers/globalController";

const globalRouter = express.Router();

globalRouter.get("/", homeController);
globalRouter.get("/join", joinController);

export default globalRouter;