import React, { useState, useEffect } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Count:", count);
  }, [count]);

  return (
    <div>
      <h2>Counter</h2>
      <button onClick={() => setCount(count - 1)}>-</button>
      <span style={{ margin: "10px" }}>{count}</span>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
}

export default Counter;