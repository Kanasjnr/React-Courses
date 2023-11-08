import { useState } from "react";
import "./index.css";

import React from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const [values, setValues] = useState([]);

  const plusButton = () => {
    // setCount(count + 1)
    setCount((prev) => prev + 1); //using previous
    setCount((prev) => prev + 1);
  };
  const minusButton = () => {
    setCount((prev) => prev - 1);
    setCount((prev) => prev - 1);
  };

  const resetButton = () => setCount(0);  

  const updateArray = (newVal) => {
    
  };


  return (
    <section className="Counter">
      <h1>{count}</h1>

      <div className="calcBtn">
        <button onClick={plusButton}> +</button>
        <button onClick={minusButton}> -</button>
      </div>
      <div className="reset">
        <button onClick={resetButton}> Reset </button>
      </div>
    </section>
  );
};

export default Counter;
