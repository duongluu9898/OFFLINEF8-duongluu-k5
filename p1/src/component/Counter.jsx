import { useState } from "react";
export default function Counter() {
  const [count, setCount] = useState(0);
  const handleDecrement = () => {
    setCount(count - 5);
  };

  const handleIncrement = () => {
    setCount(count + 5);
  };

  return (
    <div>
      <h1>Counter</h1>
      <p>Count: {count}</p>
      <button onClick={handleDecrement}>-</button>
      <button onClick={handleIncrement}>+</button>
    </div>
  );
}
