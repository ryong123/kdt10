import { useState } from "react";

function StateCounter() {

  const [count, setCount] = useState(0);

  function flus() {
    setCount(count + 1);
  }

  function minus() {
    setCount(count - 1);
  }
  return (
    <div>
      <h2>{count}</h2>
      <button onClick={flus}>+</button>
      <button onClick={minus}>-</button>
    </div>
  );
}

export default StateCounter;