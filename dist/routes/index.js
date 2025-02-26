import express from 'express';
import tasksRoutes from './tasks.routes.js';
const routes = express.Router();
routes.use('/tasks', tasksRoutes);
export default routes;
