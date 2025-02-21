export interface CreateTaskProps {
  title: string;
  description: string;
  images: Array<string>;
}

export interface UpdateTaskProps {
  id: string;
  title: string;
  description: string;
  images: Array<string>;
}

export interface DeleteTaskProps {
  id: string;
}

export interface ChangeTaskCompletionProps {
  id: string;
}
