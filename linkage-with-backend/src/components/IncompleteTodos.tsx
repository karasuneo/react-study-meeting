import { Todo } from "../types/todo";

type Props = {
  todos: Todo[];
  onClickComplete: (index: number) => void;
  onClickDelete: (index: number) => void;
};

export function IncompleteTodos(props: Props) {
  const { todos, onClickComplete, onClickDelete } = props;
  return (
    <>
      <div className="incomplete-area">
        <p className="title">未完了のTODO</p>
        <ul>
          {todos.map((todo) => {
            return (
              <div key={todo.id} className="list-row">
                <li>{todo.title}</li>
                <button
                  onClick={() => {
                    onClickComplete(todo.id);
                  }}
                >
                  完了
                </button>
                {/* 関数に引数を渡して実行するときは関数を定義し直す */}
                <button onClick={() => onClickDelete(todo.id)}>削除</button>
              </div>
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default IncompleteTodos;
