import { createTaskSchema } from '../schemas/createTaskSchema.js';
import { changeTaskCompletionSchema } from '../schemas/changeTaskCompletionSchema.js';
import {
  updateTaskBodySchema,
  updateTaskParamsSchema
} from '../schemas/updateTaskSchema.js';
import { TaskService } from '../services/index.js';
import { handleValidationError } from '../utils/validationErrors.js';
import type { Request, Response } from 'express';

class TaskController {
  async getAllTasks(_: Request, res: Response) {
    try {
      const tasks = await TaskService.getAllTasks();

      res.status(200).json(tasks);
    } catch (error: any) {
      res.status(500).json({
        message: 'Error when searching for tasks.',
        error: error.message
      });
    }
  }

  async createTask(req: Request, res: Response) {
    try {
      const data = createTaskSchema.parse(req.body);

      const { title, description, images } = data;

      const newTask = await TaskService.createTask({
        title,
        description,
        images
      });

      res.status(201).json(newTask);
    } catch (error: any) {
      if (error.name === 'ZodError') {
        handleValidationError(error, res);
      }
      res
        .status(400)
        .json({ message: 'Error creating task.', error: error.message });
    }
  }

  async updateTask(req: Request, res: Response) {
    try {
      const params = updateTaskParamsSchema.parse(req.params);
      const data = updateTaskBodySchema.parse(req.body);

      const { id } = params;
      const { title, description, images } = data;

      const updatedTask = await TaskService.updateTask({
        id,
        title,
        description,
        images
      });

      res.status(200).json(updatedTask);
    } catch (error: any) {
      if (error.name === 'ZodError') {
        handleValidationError(error, res);
      }
      res
        .status(400)
        .json({ message: 'Error updating task.', error: error.message });
    }
  }

  async deleteTask(req: Request, res: Response) {
    try {
      const params = updateTaskParamsSchema.parse(req.params);

      const { id } = params;

      const deletedTask = await TaskService.deleteTask({ id });

      res.status(200).json(deletedTask);
    } catch (error: any) {
      if (error.name === 'ZodError') {
        handleValidationError(error, res);
      }
      res
        .status(500)
        .json({ message: 'Error deleting task.', error: error.message });
    }
  }

  async changeTaskCompletion(req: Request, res: Response) {
    try {
      const params = changeTaskCompletionSchema.parse(req.params);

      const { id } = params;

      const taskCompleted = await TaskService.changeTaskCompletion({ id });

      res.status(200).json(taskCompleted);
    } catch (error: any) {
      if (error.name === 'ZodError') {
        handleValidationError(error, res);
      }
      res
        .status(500)
        .json({ message: 'Error updating task.', error: error.message });
    }
  }
}

export default new TaskController();
