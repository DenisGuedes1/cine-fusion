import express, { Application } from "express";
import "express-async-errors";
import { handlreErrors } from "./error/handleError";
import cors from "cors";
import userRouter from "./router/router.user";
import NotAdminRouter from "./router/routerUserNotAdmin.router";
import movieRouter from "./router/private/movie.router";

const app: Application = express();
app.use(express.json());

app.use(
    cors({
        origin: true,
    })
);
app.use(
    cors({
        origin: "http://localhost:5173",
    })
);
app.use("/user", userRouter);
app.use("/cinefusion", NotAdminRouter);
app.use("/priv",movieRouter)
app.use(handlreErrors);
export default app;
