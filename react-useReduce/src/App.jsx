import { useState} from "react";

const App = () => {
 const [useInput, setUseInput] = useState('')

  

  return (
    <main className="App">
      <input
        ref={inputRef}
        onChange={handleInputChange}
        type="text"
        value={randomInput}
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
