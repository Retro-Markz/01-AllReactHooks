import { useState } from "react";

const UseState = () => {
  const [color, setColor] = useState("Red"); //el primer valor almacena el uso del estado original, el set lo actualiza segun la funcion lo indique

  const changeColor = () => {
    setColor("Blue");
  };

  return (
    <div>
      <h1>my favourite color is {color}!</h1>
      <button onClick={changeColor}>Blue</button>
    </div>
  );
};

export default UseState;
