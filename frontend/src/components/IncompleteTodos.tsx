type Props = {
  todos: string[];
  onClickComplete: (index: number) => void;
  onClickDelete: (index: number) => void;
};

export const IncompleteTodos = (props: Props) => {
  const { todos, onClickComplete, onClickDelete } = props;
  return (
    <>
      <div className="incomplete-area">
        <p className="title">未完了のTODO</p>
        <ul>
          {todos.map((todo, index) => {
            return (
              <div key={todo} className="list-row">
                <li>{todo}</li>
                <button
                  onClick={() => {
                    onClickComplete(index);
                  }}
                >
                  完了
                </button>
                {/* 関数に引数を渡して実行するときは関数を定義し直す */}
                <button onClick={() => onClickDelete(index)}>削除</button>
              </div>
            );
          })}
        </ul>
      </div>
    </>
  );
};
