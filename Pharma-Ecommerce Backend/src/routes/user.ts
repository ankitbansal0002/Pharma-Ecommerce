import express from "express";
import { newUser, getAllUsers, getUser, deleteUser } from "../controllers/user.js";
import { adminOnly } from "../middlewares/auth.js";

const app = express.Router();
// route - localhost/api/v1/user/new
app.post("/new", newUser);

// route - localhost/api/v1/all
app.get("/all", adminOnly, getAllUsers);

// route - localhost/api/v1/dynamic { it should be below new and all other custom can create issue}
app.get("/:id", getUser);

app.delete("/:id", adminOnly, deleteUser);

// app.route(":id").get(getUser).delete(deleteUser);

export default app;
