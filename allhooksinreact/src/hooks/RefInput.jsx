import { useRef } from "react";

const RefInput = () => {
  const inputElement = useRef();

  const btnClicked = () => {
    console.log(inputElement.current);
    inputElement.current.style.background = "blue"; //obtiene elementos del DOM y los modifica
  };

  return (
    <div>
      <input type="text" ref={inputElement} />
      <button onClick={btnClicked}>Click here!</button>
    </div>
  );
};

export default RefInput;
