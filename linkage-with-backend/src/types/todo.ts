export type Todo = {
  id: number;
  title: string;
  isComplete: boolean;
};

export type GetTodoResponse = {
  todos: Todo[];
};

export type PostTodoResponse = {
  id: number;
  title: string;
  isComplete: boolean;
};

export type PutTodoResponse = {
  id: number;
  title: string;
  isComplete: boolean;
};
