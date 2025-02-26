import express from 'express';
import { TaskController } from '../controllers/index.js';
const tasksRoutes = express.Router();
tasksRoutes.get('/', TaskController.getAllTasks);
tasksRoutes.post('/', TaskController.createTask);
tasksRoutes.put('/:id', TaskController.updateTask);
tasksRoutes.put('/change-task-completion/:id', TaskController.changeTaskCompletion);
tasksRoutes.delete('/:id', TaskController.deleteTask);
export default tasksRoutes;
