import express from "express";
import userRoute from "./routes/user.js";
import { connectDB } from "./utils/features.js";
import { errorMiddleware } from "./middlewares/error.js";
const port = 3000;
const app = express();
connectDB();
app.use(express.json());
app.get("/", (req, res) => {
    res.send("Api is working fine");
});
// Using Routes
app.use("/api/v1/user", userRoute);
app.use(errorMiddleware);
app.listen(port, () => {
    console.log(`Express is working on http:localhost:${port}`);
});
