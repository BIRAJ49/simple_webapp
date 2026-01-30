import { useState } from "react";
import "./App.css";

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="app">
      <div className="counter-card">
        <p className="eyebrow">Simple demo</p>
        <h1>Click counter</h1>
        <p className="count" aria-live="polite">
          {count} {count === 1 ? "click" : "clicks"}
        </p>
        <button type="button" onClick={() => setCount((value) => value + 1)}>
          Click me
        </button>
        <button
          type="button"
          className="ghost"
          onClick={() => setCount(0)}
        >
          Reset
        </button>
      </div>
    </div>
  );
}
