import { ChangeEvent } from "react";

type Props = {
  todoText: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onClick: () => void;
  disabled: boolean;
};

export const InputTodo = (props: Props) => {
  const { todoText, onChange, onClick, disabled } = props;
  return (
    <>
      <div className="input-area">
        <input
          disabled={disabled}
          placeholder="TODOを入力"
          value={todoText}
          onChange={onChange}
        />
        <button disabled={disabled} onClick={onClick}>
          追加
        </button>
      </div>
    </>
  );
};
