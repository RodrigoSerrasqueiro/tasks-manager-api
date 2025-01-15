import { createTaskSchema } from "../schemas/createTaskSchema.js";
import { markTaskAsCompletedSchema } from "../schemas/markTaskAsCompletedSchema.js";
import {
  updateTaskBodySchema,
  updateTaskParamsSchema,
} from "../schemas/updateTaskSchema.js";
import { TaskService } from "../services/index.js";
import { handleValidationError } from "../utils/validationErrors.js";

class TaskController {
  async getAllTasks(_, res) {
    try {
      const tasks = await TaskService.getAllTasks();

      return res.status(200).json(tasks);
    } catch (error) {
      return res.status(500).json({
        message: "Error when searching for tasks.",
        error: error.message,
      });
    }
  }

  async createTask(req, res) {
    try {
      const data = createTaskSchema.parse(req.body);

      const { title, description, images } = data;

      const newTask = await TaskService.createTask({
        title,
        description,
        images,
      });

      return res.status(201).json(newTask);
    } catch (error) {
      if (error.name === "ZodError") {
        return handleValidationError(error, res);
      }
      return res
        .status(400)
        .json({ message: "Error creating task.", error: error.message });
    }
  }

  async updateTask(req, res) {
    try {
      const params = updateTaskParamsSchema.parse(req.params);
      const data = updateTaskBodySchema.parse(req.body);

      const { id } = params;
      const { title, description } = data;

      const updatedTask = await TaskService.updateTask({
        id,
        title,
        description,
      });

      return res.status(200).json(updatedTask);
    } catch (error) {
      if (error.name === "ZodError") {
        return handleValidationError(error, res);
      }
      return res
        .status(400)
        .json({ message: "Error updating task.", error: error.message });
    }
  }

  async deleteTask(req, res) {
    try {
      const params = updateTaskParamsSchema.parse(req.params);

      const { id } = params;

      const deletedTask = await TaskService.deleteTask({ id });

      return res.status(200).json(deletedTask);
    } catch (error) {
      if (error.name === "ZodError") {
        return handleValidationError(error, res);
      }
      return res
        .status(500)
        .json({ message: "Error deleting task.", error: error.message });
    }
  }

  async markTaskAsCompleted(req, res) {
    try {
      const params = markTaskAsCompletedSchema.parse(req.params);

      const { id } = params;

      const taskCompleted = await TaskService.markTaskAsCompleted({ id });

      return res.status(200).json(taskCompleted);
    } catch (error) {
      if (error.name === "ZodError") {
        return handleValidationError(error, res);
      }
      return res
        .status(500)
        .json({ message: "Error updating task.", error: error.message });
    }
  }
}

export default new TaskController();
