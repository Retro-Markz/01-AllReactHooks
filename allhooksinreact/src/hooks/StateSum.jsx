import { useState } from "react";

const StateSum = () => {
  const [count, setCount] = useState(0);

  const increaseCount = () => {
    setCount(count + 7);
  };
  return (
    <div>
      <h1>count= {count} </h1>
      <button onClick={increaseCount}>Increase</button>
    </div>
  );
};

export default StateSum;
