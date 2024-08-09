import { useState } from "react";
import {
  GetTodoResponse,
  PostTodoResponse,
  PutTodoResponse,
  Todo,
} from "../types/todo";

export const useTodo = () => {
  const [incompleteTodos, setIncompleteTodos] = useState<Todo[]>([]);
  const [completeTodos, setCompleteTodos] = useState<Todo[]>([]);

  const getTodos = async (): Promise<Todo[]> => {
    const response = await fetch("http://localhost:8000/todo");
    const data: GetTodoResponse = await response.json();

    const incompleteTodos = data.todos.filter((todo: Todo) => !todo.isComplete);
    const completeTodos = data.todos.filter((todo: Todo) => todo.isComplete);

    setIncompleteTodos(incompleteTodos);
    setCompleteTodos(completeTodos);
    return data.todos;
  };

  const postTodo = async (title: string): Promise<Todo> => {
    const response = await fetch("http://localhost:8000/todo", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title }),
    });
    const data: PostTodoResponse = await response.json();
    return data;
  };

  const putCompleteTodo = async (id: number): Promise<Todo> => {
    const response = await fetch(`http://localhost:8000/todo/complete/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data: PutTodoResponse = await response.json();
    return data;
  };

  const putInCompleteTodo = async (id: number): Promise<Todo> => {
    const response = await fetch(
      `http://localhost:8000/todo/uncomplete/${id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data: PutTodoResponse = await response.json();
    return data;
  };

  const deleteTodo = async (id: number) => {
    await fetch(`http://localhost:8000/todo/${id}`, {
      method: "DELETE",
    });
  };

  return {
    incompleteTodos,
    completeTodos,
    getTodos,
    postTodo,
    putInCompleteTodo,
    putCompleteTodo,
    deleteTodo,
  };
};
