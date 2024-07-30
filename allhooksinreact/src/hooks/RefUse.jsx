//useRef permite utilizar variables ,utables que no volveran a renderizar el componente
//tambien se usa para acceder a elementos del DOM

import { useState, useRef, useEffect } from "react";

const RefUse = () => {
  const [value, setValue] = useState(0);
  const count = useRef(0);

  useEffect(() => {
    count.current = count.current + 1;
  });

  return (
    <>
      <button
        onClick={() => {
          setValue((prev) => prev - 1);
        }}
      >
        -1
      </button>
      <h1>{value}</h1>
      <button
        onClick={() => {
          setValue((prev) => prev + 1);
        }}
      >
        +1
      </button>

      <h1>Render count: {count.current}</h1>
    </>
  );
};

export default RefUse;
