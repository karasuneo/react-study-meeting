export const Button = () => {
  const onClickAlert = () => {
    alert("ボタンが押されました！");
  };

  return <button onClick={onClickAlert}>アラートを鳴らす</button>;
};
