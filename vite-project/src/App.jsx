import Message from "./components/Message.jsx";
function App() {
  const person = {
    name: "Jack",
    message: "Hit the road Jack",
    luckyNumbers: [7, 13, 21],
  };
  return (
    <div className="App">
      <Message />
    </div>
  );
}

export default App;
