## 型づけをする理由

今までは JavaScript を使って開発を行ってきました。
ただ、JavaScript だと Props 間でどんなデータを渡せばいいのかシステム側で判断することができません

例えば、`InputTodo`コンポーネントを呼び出す際、どんな Props を渡すかは、`InputTodo.jsx`ファイルの中身を見ないと確認することができない・本来入力されるはずのない Props が渡せてしまうなどの問題があります

```jsx
<InputTodo
  todoText={todoText}
  onChange={onChangeTodoText}
  onClickAdd={onClickAdd}
  disabled={incompleteTodos.length >= 5}
/>
```

TypeScript だと Props にどんな値が入り、それらがどんな型で入ってくるか定義できるため、先ほどあげた問題を解決することができます

```ts
type Props = {
  todoText: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onClick: () => void;
  disabled: boolean;
};
```

## 実際に型づけをしてみる

TODO アプリに Props の型と`useState`に型を定義していきます

### 入力欄のコンポーネント

Props の型を定義します

```tsx:InputTodo.tsx
import { ChangeEvent } from "react";

type Props = {
  todoText: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onClick: () => void;
  disabled: boolean;
};

export const InputTodo = (props: Props) => {
  const { todoText, onChange, onClick, disabled } = props;

...
```

### 未完了 TODO のコンポーネント

Props の型を定義します

```jsx:IncompleteTodos.jsx
type Props = {
  todos: string[];
  onClickComplete: (index: number) => void;
  onClickDelete: (index: number) => void;
};

export const IncompleteTodos = (props: Props) => {
  const { todos, onClickComplete, onClickDelete } = props;
  ...
```

### 完了 TODO のコンポーネント

Props の型を定義します

```jsx:CompleteTodos.jsx
type Props = {
  todos: string[];
  onClickBack: (index: number) => void;
};

export const CompleteTodos = (props: Props) => {
  const { todos, onClickBack } = props;

...
```
