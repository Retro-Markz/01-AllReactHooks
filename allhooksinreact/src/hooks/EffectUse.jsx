import { useEffect, useState } from "react";

//use effect permite ejecutatr efectos colaterales in los componentes
//ejemplos: fetch data from APIs, actualizar directamente el DOM, temporizadores, setTimeOut y setInterval
const EffectUse = () => {
  //useEffect(cb,d) //el lprimer parametro es una funcion callback y el segundo son parametros o dependencias

  const [count, setCount] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setCount((count) => count + 1);
    }, 5000);
  }, [count]);
  //se inicia el useEffect con una funcion flecha,dentro el useState actualiza el dato, el segundo parametro es el tiempo en el que se ejecutara el useState

  return (
    <>
      <h1>I have render {count} times!</h1>
    </>
  );
};

export default EffectUse;
