import React, { useState } from "react";

function Calculator() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState("");

  const calculate = (op) => {
    let a = Number(num1);
    let b = Number(num2);

    if (op === "+") setResult(a + b);
    else if (op === "-") setResult(a - b);
    else if (op === "*") setResult(a * b);
    else if (op === "/") setResult(b !== 0 ? a / b : "Cannot divide by 0");
  };

  return (
    <div>
      <h2>Calculator</h2>

      <input
        type="number"
        placeholder="Enter first number"
        onChange={(e) => setNum1(e.target.value)}
      />
      <br /><br />

      <input
        type="number"
        placeholder="Enter second number"
        onChange={(e) => setNum2(e.target.value)}
      />
      <br /><br />

      <button onClick={() => calculate("+")}>+</button>
      <button onClick={() => calculate("-")}>-</button>
      <button onClick={() => calculate("*")}>*</button>
      <button onClick={() => calculate("/")}>/</button>

      <h3>Result: {result}</h3>
    </div>
  );
}

export default Calculator;