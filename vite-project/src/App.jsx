import ConditionalComponent from "./components/ConditionalComponent.jsx";
import Fruits from "./components/Fruits.jsx";
function App() {
  const person = {
    name: "Jack",
    message: "Hit the road Jack",
    luckyNumbers: [7, 13, 21],
  };
  return (
    <div className="App">
      <ConditionalComponent />
    </div>
  );
}

export default App;
