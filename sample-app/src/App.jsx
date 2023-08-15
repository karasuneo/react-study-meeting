import { useState } from "react";
import { Button } from "./Button";

function App() {
  const [count, setCount] = useState(0);

  const onClickAlert = () => {
    alert("ボタンが押されました！");
  };

  const onClickCountUp = () => {
    setCount(count + 1);
  };

  return (
    <>
      <h1>Hello React!</h1>
      <p>I'm Yu</p>
      <Button onClick={onClickAlert}>アラートを鳴らす</Button>
      <Button onClick={onClickCountUp}>カウントアップ</Button>
      <p>カウント: {count}</p>
    </>
  );
}

export default App;
