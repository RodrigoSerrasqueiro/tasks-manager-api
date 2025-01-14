// src/routes/index.js
import express from "express";
import tasksRoutes from "./tasks.routes.js";

const routes = express.Router();

// Rotas no nível raiz
routes.use("/tasks", tasksRoutes);

export default routes;
