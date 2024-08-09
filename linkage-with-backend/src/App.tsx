import { useEffect, useState } from "react";
import "./style.css";
import { InputTodo } from "./components/InputTodo";
import { IncompleteTodos } from "./components/IncompleteTodos";
import { CompleteTodos } from "./components/CompleteTodos";

import { useTodo } from "./hooks/todo";

export function App() {
  const {
    incompleteTodos,
    completeTodos,
    getTodos,
    postTodo,
    putInCompleteTodo,
    putCompleteTodo,
    deleteTodo,
  } = useTodo();
  const [todoText, setTodoText] = useState("");

  const onChangeTodoText = (event: React.ChangeEvent<HTMLInputElement>) =>
    setTodoText(event.target.value);

  const onClickAdd = async () => {
    if (todoText === "") return;

    await postTodo(todoText);
    await getTodos();

    setTodoText("");
  };

  const onClickDelete = async (id: number) => {
    await deleteTodo(id);
    await getTodos();
  };

  const onClickComplete = async (id: number) => {
    await putCompleteTodo(id);
    await getTodos();
  };

  const onClickBack = async (id: number) => {
    await putInCompleteTodo(id);
    await getTodos();
  };

  useEffect(() => {
    const fetch = async () => {
      await getTodos();
    };
    fetch();
  }, []);

  return (
    <>
      <InputTodo
        todoText={todoText}
        onChange={onChangeTodoText}
        onClick={onClickAdd}
        disabled={incompleteTodos.length >= 5}
      />
      {incompleteTodos.length >= 5 && (
        <p style={{ color: "red" }}>登録できるtodoは5個までだよ</p>
      )}
      <IncompleteTodos
        todos={incompleteTodos}
        onClickComplete={onClickComplete}
        onClickDelete={onClickDelete}
      />
      <CompleteTodos todos={completeTodos} onClickBack={onClickBack} />
    </>
  );
}

export default App;
