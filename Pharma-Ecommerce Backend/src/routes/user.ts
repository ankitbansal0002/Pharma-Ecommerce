import express from "express";
import { newUser, getAllUsers, getUser } from "../controllers/user.js";

const app = express.Router();
// route - localhost/api/v1/user/new
app.post("/new", newUser);

// route - localhost/api/v1/all
app.get("/all", getAllUsers);

// route - localhost/api/v1/dynamic { it should be below new and all other custom can create issue}
app.get("/:id", getUser);

export default app;
