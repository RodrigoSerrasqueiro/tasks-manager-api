// src/controllers/taskController.js
import { TaskModel } from "../models/index.js";

class TaskController {
  async getAllTasks(_, res) {
    try {
      const tasks = [
        { id: 1, title: "Task", description: "Hello", completed: false },
      ];
      res.status(200).json(tasks);
    } catch (error) {
      res
        .status(500)
        .json({ message: "Erro ao buscar tarefas.", error: error.message });
    }
  }

  // Cria uma nova tarefa
  async createTask(req, res) {
    try {
      const { title, description, completed } = req.body;

      // Cria a tarefa no banco de dados
      const newTask = await TaskModel.create({
        title,
        description,
        completed: completed || false,
      });

      res.status(201).json(newTask);
    } catch (error) {
      res
        .status(400)
        .json({ message: "Erro ao criar tarefa.", error: error.message });
    }
  }

  // Atualiza uma tarefa existente
  async updateTask(req, res) {
    try {
      const { id } = req.params;
      const { title, description, completed } = req.body;

      const updatedTask = await TaskModel.findByIdAndUpdate(
        id,
        { title, description, completed },
        { new: true, runValidators: true } // Retorna o documento atualizado
      );

      if (!updatedTask) {
        return res.status(404).json({ message: "Tarefa não encontrada." });
      }

      res.status(200).json(updatedTask);
    } catch (error) {
      res
        .status(400)
        .json({ message: "Erro ao atualizar tarefa.", error: error.message });
    }
  }

  // Exclui uma tarefa
  async deleteTask(req, res) {
    try {
      const { id } = req.params;

      const deletedTask = await TaskModel.findByIdAndDelete(id);

      if (!deletedTask) {
        return res.status(404).json({ message: "Tarefa não encontrada." });
      }

      res.status(200).json({ message: "Tarefa excluída com sucesso." });
    } catch (error) {
      res
        .status(500)
        .json({ message: "Erro ao excluir tarefa.", error: error.message });
    }
  }
}

export default new TaskController();
