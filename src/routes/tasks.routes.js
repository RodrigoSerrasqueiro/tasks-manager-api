// src/routes/taskRoutes.js
import express from "express";
import { TaskController } from "../controllers/index.js";

const tasksRoutes = express.Router();

tasksRoutes.get("/", TaskController.getAllTasks.bind(TaskController));
tasksRoutes.post("/", TaskController.createTask.bind(TaskController));
tasksRoutes.put("/:id", TaskController.updateTask.bind(TaskController));
tasksRoutes.put(
  "/change-task-completion/:id",
  TaskController.changeTaskCompletion.bind(TaskController)
);
tasksRoutes.delete("/:id", TaskController.deleteTask.bind(TaskController));

export default tasksRoutes;
