import { useRef, useState } from "react";

export default function App() {
  const numberRef = useRef();
  const [fact, setFact] = useState();
  const [loading, setLoading] = useState(false);

  const getFact = async () => {
    const number = numberRef.current.value;
    setLoading(true);
    if (!number) {
      setFact("Oops! Please enter a number...");
      setLoading(false);
    }
    else {
      const response = await fetch(`http://numbersapi.com/${number}`);
      const text = await response.text();
      setLoading(false);
      setFact(text);
    }
  };

  if (loading) {
    return (
      <div className="loading-container">
        {<img src="./d9f21515b1e38d83e94fdbce88f623b6.gif" alt="loading..." className="loading-image" />}
      </div>
    );
  }
  
  return (
    <div className="app-container">
      <h1 className="title">Number Facts</h1>
      <div className="input-container">
        <input ref={numberRef} type="number" placeholder="Enter a number" className="number-input" />
        <button onClick={getFact} className="get-fact-button">Get Fact</button>
      </div>

      <div className="fact-container">
        <p className="fact-text">{fact}</p>
      </div>
    </div>
  );
}