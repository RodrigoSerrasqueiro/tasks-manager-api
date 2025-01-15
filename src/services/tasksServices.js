import { createId } from "@paralleldrive/cuid2";
import { TaskModel } from "../models/index.js";

class TaskService {
  async getAllTasks() {
    const tasks = await TaskModel.find();

    return {
      tasks,
    };
  }

  async createTask({ title, description, images }) {
    const newTask = await TaskModel.create({
      id: createId(),
      title,
      description,
      images,
    });

    return {
      newTask,
    };
  }

  async updateTask({ id, title, description, images }) {
    const updatedTask = await TaskModel.findOneAndUpdate(
      { id },
      { title, description, images },
      { new: true, runValidators: true }
    );

    return {
      updatedTask,
    };
  }

  async deleteTask({ id }) {
    const deletedTask = await TaskModel.findOneAndDelete({ id });

    return {
      deletedTask,
    };
  }

  async changeTaskCompletion({ id }) {
    const task = await TaskModel.findOne({ id });
    const taskCompleted = await TaskModel.findOneAndUpdate(
      { id },
      { completed: !task.completed },
      { new: true, runValidators: true }
    );

    return {
      taskCompleted,
    };
  }
}

export default new TaskService();
