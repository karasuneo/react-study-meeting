export type Todo = {
  id: string;
  title: string;
  isComplete: boolean;
};

export type GetTodoResponse = {
  todos: Todo[];
};

export type PostTodoResponse = {
  id: string;
  title: string;
  isComplete: boolean;
};

export type PutTodoResponse = {
  id: string;
  title: string;
  isComplete: boolean;
};
