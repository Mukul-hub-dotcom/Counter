import React from "react";
export default function Counter() {
  const [counter, setCounter] = React.useState(5);
  const handleIncrement = (val) => {
    setCounter(counter + val);
  };
  const handleDual = () => {
    setCounter(counter * 2);
  };
  return (
    <div>
      <h1>Counter</h1>

      <h2>{counter}</h2>

      <button onClick={() => handleIncrement(1)}>Add </button>
      <button onClick={() => handleIncrement(-1)}>Reduce </button>
      <button onClick={() => handleDual()}>Double </button>
    </div>
  );
}
