import express from "express";
import morgan from "morgan";
import global from "./routers/globalRouter";
import user from "./routers/userRouter";
import video from "./routers/videoRouter";

const PORT = 4000;
const app = express();

/*서버 미들웨어*/
app.use(morgan("dev"));

/*라우팅을 위한 미들웨어*/
app.use("/", global);
app.use("/users", user);
app.use("/videos", video);
 
app.listen(PORT, () => {
    console.log(`Server listenting on http://localhost:${PORT} `)
});