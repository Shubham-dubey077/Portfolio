import React, { useState } from "react";

function Prime() {
  const [num, setNum] = useState("");
  const [result, setResult] = useState("");

  const check = () => {
    let n = parseInt(num);
    let prime = true;

    if (n <= 1) prime = false;

    for (let i = 2; i < n; i++) {
      if (n % i === 0) {
        prime = false;
        break;
      }
    }

    setResult(prime ? "Prime Number" : "Not Prime");
  };

  return (
    <div>
      <h2>Prime Checker</h2>
      <input onChange={(e) => setNum(e.target.value)} />
      <button onClick={check}>Check</button>
      <p>{result}</p>
    </div>
  );
}

export default Prime;