import express from "express";
import {connectDB} from "./utils/features.js"
import { errorMiddleware } from "./middlewares/error.js";
import NodeCache from "node-cache";
import { config } from "dotenv";
import morgan from "morgan";
import Stripe from "stripe";

//routes
import userRoute from "./routes/user.js";
import productRoute from "./routes/products.js";
import OrderRoute from "./routes/order.js";
import paymentRoute from "./routes/payment.js";
import dashboardRoute from "./routes/stats.js";


config({
    path: "./.env",
  });
  
const port = process.env.PORT || 3000;
const mongoURI = process.env.MONGO_URI || "";
const stripeKey = process.env.STRIPE_KEY || "";

const app = express();


app.use(morgan("dev"));;
connectDB(mongoURI);

app.use(express.json());

export const stripe = new Stripe(stripeKey);
export const myCache = new NodeCache();


app.get("/", (req, res) => {
    res.send("Api is working fine");
})

// Using Routes
app.use("/api/v1/user", userRoute);
app.use("/api/v1/product", productRoute);
app.use("/api/v1/order", OrderRoute);
app.use("/api/v1/payment", paymentRoute);
app.use("/api/v1/dashboard", dashboardRoute);

app.use("/uploads", express.static("uploads"));
app.use(errorMiddleware);

app.listen(port, () => {

    console.log(`Express is working on http:localhost:${port}`)

})