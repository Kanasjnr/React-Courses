import { useState } from "react";

const App = () => {
  const [userInput, setUserInput] = useState("");
  const [count, setCount] = useState(0);
  const [color, setColor] = useState(false);

  return (
    <main className="App"  style={{color: color ? '#fff' : '#fff92'}}>
      <input
        onChange={(e)=> setUserInput(e.target.value)}
        type="text"
        value={userInput}
        placeholder="Type anything"
      />
      <p>Renders: {renders.current}</p>

      <br />
      <br />

      <section>
        <button onClick={stopTimer}>Stop</button>
        <button onClick={startTimer}>Start</button>
      </section>

      <button onClick={resetTimer}>Reset</button>

      <br />
      <br />

      <p>Seconds: {Seconds}</p>

      <br />
      <br />

      <p>{randomInput}</p>
    </main>
  );
};

export default App;
