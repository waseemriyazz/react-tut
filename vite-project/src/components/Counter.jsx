import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  const [incrementBy, setIncrementBy] = useState(1);
  function increaseIncrementby() {
    setIncrementBy(incrementBy + 1);
  }
  function decreaseIncrementby() {
    setIncrementBy(incrementBy - 1);
  }

  function increment() {
    setCount(count + incrementBy);
  }
  function decrement() {
    setCount(count - incrementBy);
  }

  return (
    <div>
      <h1>The value of count is : {count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <h1>We are changing the count by: {incrementBy}</h1>
      <button onClick={increaseIncrementby}>Increase Increment</button>
      <button onClick={decreaseIncrementby}>Decrease Increment</button>
    </div>
  );
}
