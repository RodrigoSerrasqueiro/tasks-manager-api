import mongoose, { type ValidatorFunction } from 'mongoose';

const taskSchema = new mongoose.Schema(
  {
    id: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    completed: { type: Boolean, required: true, default: false },
    images: {
      type: [String],
      required: true,
      validate: {
        validator: (v: ValidatorFunction) => {
          return v.length > 0;
        },
        message: 'At least one image is required'
      }
    }
  },
  { timestamps: true }
);

const TaskModel = mongoose.model('tasks', taskSchema);

export default TaskModel;
