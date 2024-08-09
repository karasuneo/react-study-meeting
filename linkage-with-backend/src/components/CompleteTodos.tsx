import { Todo } from "../types/todo";

type Props = {
  todos: Todo[];
  onClickBack: (id: number) => void;
};

export function CompleteTodos(props: Props) {
  const { todos, onClickBack } = props;
  return (
    <>
      <div className="complete-area">
        <p className="title">完了のTODO</p>
        <ul>
          {todos.map((todo) => {
            return (
              <div key={todo.id} className="list-row">
                <li>{todo.title}</li>
                <button
                  onClick={() => {
                    onClickBack(todo.id);
                  }}
                >
                  戻す
                </button>
              </div>
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default CompleteTodos;
