import React, { useState } from "react";

function Palindrome() {
  const [text, setText] = useState("");
  const [result, setResult] = useState("");

  const check = () => {
    let rev = text.split("").reverse().join("");
    setResult(text === rev ? "Palindrome" : "Not Palindrome");
  };

  return (
    <div>
      <h2>Palindrome</h2>
      <input onChange={(e) => setText(e.target.value)} />
      <button onClick={check}>Check</button>
      <p>{result}</p>
    </div>
  );
}

export default Palindrome;