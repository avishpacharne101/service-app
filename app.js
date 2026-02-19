import express from "express";
import userRouter from "./router/user.router.js";
import reqRouter from "./router/req.router.js";
const app = express();
app.use(express.json());
app.use("/api/v1/user", userRouter);
app.use("/api/v1/request", reqRouter);
export default app;
