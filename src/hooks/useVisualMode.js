import { useState } from "react";

export function useVisualMode(initial) {
  const [mode, setMode] = useState(initial);
  const [history, setHistory] = useState([initial]);

  function transition(newValue, replace = false) {
    setMode(newValue);
    console.log(mode);
    setHistory((prev) => {
      if (replace === true) {
        prev[prev.length - 1] = newValue;

        return prev;
      } else {
        prev.push(newValue);
        return prev;
      }
    });
  }

  function back() {
    if (history.length === 1) {
      setMode(history[0]);
    } else {
      setHistory((prev) => {
        prev.pop();
        setMode(prev[history.length - 1]);
        return prev;
      });
    }
  }

  return { mode, transition, back };
}
