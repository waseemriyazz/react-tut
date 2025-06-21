import Hello from "./components/Hello.jsx";
import HelloObject from "./components/HelloObject.jsx";
function App() {
  const person = {
    name: "Jack",
    message: "Hit the road Jack",
    luckyNumbers: [7, 13, 21],
  };
  return (
    <div className="App">
      <Hello name="Bob" message="Get a Job" />
      <Hello />
      <HelloObject person={person} />
    </div>
  );
}

export default App;
