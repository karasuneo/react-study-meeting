type Props = {
  todoText: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onClick: () => void;
  disabled: boolean;
};



export const InputTodo = (props: Props) => {
  const { todoText, onChange, onClick, disabled } = props;
  return (
    <>
      <div  className="input-area">
        <input
          disabled={disabled}
          placeholder="TODOを入力"
          value={todoText}
          onChange={onChange}
        />
        <button disabled={disabled} onClick={onClick} className="add-button">
          追加
        </button>
      </div>
    </>
  );
};
