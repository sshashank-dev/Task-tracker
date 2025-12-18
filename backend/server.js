import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import taskRoutes from "./routes/taskRoutes.js";

const app = express();

app.use(cors());
app.use(express.json());

mongoose
    .connect("mongodb://127.0.0.1:27017/simpletasks")
    .then(() => console.log("MongoDB Connected"))
    .catch(err => console.log(err));

app.use("/api/tasks", taskRoutes);

app.listen(5000, () => {
    console.log("Server running on http://localhost:5000");
});
