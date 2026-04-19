import React, { useState } from "react";

function Armstrong() {
  const [num, setNum] = useState("");
  const [result, setResult] = useState("");

  const check = () => {
    let n = num;
    let sum = 0;
    let temp = n;

    while (temp > 0) {
      let digit = temp % 10;
      sum += digit * digit * digit;
      temp = Math.floor(temp / 10);
    }

    setResult(sum === Number(n) ? "Armstrong" : "Not Armstrong");
  };

  return (
    <div>
      <h2>Armstrong</h2>
      <input onChange={(e)=>setNum(e.target.value)} />
      <button onClick={check}>Check</button>
      <p>{result}</p>
    </div>
  );
}

export default Armstrong;