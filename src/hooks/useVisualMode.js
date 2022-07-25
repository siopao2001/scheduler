import {useState} from "react";

export function useVisualMode(initial) {
  const [mode, setMode] = useState(initial);
  const [history, setHistory] = useState([initial]);

  function transition (newValue, replace = false) {
     setMode(newValue)
     setHistory((prev) => { 
        if (replace === true) {
          prev[prev.length - 1] = newValue
          
          return prev
         } else {
          prev.push(newValue);
          return prev
       }  
    })
  };
 

  function back() {
     if (history.length === 1) {
       setMode(history[0])
    } else {
       setHistory((prev) => {
       console.log(prev)
       prev.pop()
      
       console.log(prev)
       setMode(prev[history.length - 1])
       return prev
       
       });
//        setMode(history[history.length -  1])
//        console.log(history)
//        console.log(mode)
    }  
  };


  return { mode, transition, back };
}

