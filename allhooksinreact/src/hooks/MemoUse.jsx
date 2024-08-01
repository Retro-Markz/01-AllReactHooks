//it return a memorized value

import { useState, useMemo } from "react";

function MemoUse() {
  const [number, setNumber] = useState(0);
  const [counter, setCounter] = useState(0);

  function cubeNum(num) {
    console.log("calculate done");
    return Math.pow(num, 3);
  }

  const result = useMemo(() => cubeNum(number), [number]);

  return (
    <div>
      <input
        type="number"
        value={number}
        onChange={(e) => {
          setNumber(e.target.value);
        }}
      />
      <h2>Cube of the number: {result}</h2>
      <button
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        Counter ++
      </button>
      <h3>Counter: {counter}</h3>
    </div>
  );
}

export default MemoUse;
