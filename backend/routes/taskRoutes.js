import express from "express";
import Task from "../models/Task.js";

const router = express.Router();

// Get tasks
router.get("/", async (req, res) => {
    const tasks = await Task.find();
    res.json(tasks);
});

// Add task
router.post("/", async (req, res) => {
    const task = await Task.create(req.body);
    res.json(task);
});

// Toggle complete
router.put("/:id", async (req, res) => {
    const task = await Task.findById(req.params.id);
    task.completed = !task.completed;
    await task.save();
    res.json(task);
});

// Delete task
router.delete("/:id", async (req, res) => {
    await Task.findByIdAndDelete(req.params.id);
    res.json({ message: "Deleted" });
});

export default router;
