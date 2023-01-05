import express from "express";
import { watchVideoController, editVideoController, deleteVideoController, commentsController, deleteCommentsController } from "../controllers/videoController";

const videoRouter = express.Router();

videoRouter.get("/watch", watchVideoController);
videoRouter.get("/edit", editVideoController);
videoRouter.get("/delete", deleteVideoController);
videoRouter.get("/comments", commentsController);
videoRouter.get("/comments/delete", deleteCommentsController);

export default videoRouter;