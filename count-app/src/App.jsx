function App() {
  const onClickAlert = () => {
    alert("ボタンが押されました！");
  };

  return (
    <>
      <h1>Hello React!</h1>
      <p>I'm Yu</p>
      <button onClick={onClickAlert}>アラートを鳴らす</button>
    </>
  );
}

export default App;
