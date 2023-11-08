import { useState } from "react";
import "./index.css";

import React from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const plusButton = () => setCount(count + 1);
  const minusButton = () => setCount(count - 1);
  const resetButton = () => setCount(0);
  return (
    <section >
      <h1>{count}</h1>

      <div >
        <button onClick={plusButton}> +</button>
        <button onClick={minusButton}> -</button>
       
      </div>
      <div className="rest">
      <button onClick={resetButton}> Reset </button>
      </div>
    </section>
  );
};

export default Counter;
