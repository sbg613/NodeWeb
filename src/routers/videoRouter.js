import express from "express";
import { watchVideoController, editVideoController, deleteVideoController, commentsController, deleteCommentsController, uploadVideoController } from "../controllers/videoController";

const videoRouter = express.Router();
//### /videos + /...
videoRouter.get("/watch/:id(\\d+)", watchVideoController);
videoRouter.get("/edit/:id(\\d+)", editVideoController);
videoRouter.get("/upload/:id(\\d+)", uploadVideoController);
videoRouter.get("/delete/:id(\\d+)", deleteVideoController);
videoRouter.get("/comments/:id(\\d+)", commentsController);
videoRouter.get("/comments/delete/:id(\\d+)", deleteCommentsController);

export default videoRouter;