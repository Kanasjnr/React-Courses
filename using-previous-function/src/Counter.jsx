import { useState } from "react";

import React from "react";

const Counter = () => {
  const [count, setCount] = useState();
  return (
    <section>
      <h1>{count}</h1>
      <div>
        <button>+</button>
        <button>-</button>
      </div>
    </section>
  );
};

export default Counter;
