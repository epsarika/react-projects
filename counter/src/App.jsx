import { useState } from "react";
export default function App() {

const increment = () => {
  setCount(count + 1);
};
const decrement = () => {
  setCount(count - 1);
};
const reset = () => {
  setCount(0);
};

const [count, setCount] = useState(0);
    return (
    <div className="container">
      <h2>Counter App</h2>

    <div className="counter">
    {count}
    </div>
    <div className="buttons">
      <button className="decrement" onClick={decrement}>-</button>
      <button className="increment" onClick={increment}>+</button>
    </div>
    <button className="reset" onClick={reset}>Reset</button>
    </div>
    );     
}