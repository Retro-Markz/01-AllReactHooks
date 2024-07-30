import { useState } from "react";

//set an objct to display properties
const StateCars = () => {
  const [car, setCar] = useState({
    brand: "Ferrari",
    model: "Roma",
    year: 2023,
    color: "red",
  });

  const updateColor = () => {
    setCar((previous) => {
      return { ...previous, color: "Blue" };
    });
  };
  return (
    <>
      <h1>My {car.brand}</h1>
      <h2>
        It is a {car.color} {car.model} from {car.year}
      </h2>
      <button onClick={updateColor}>Blue</button>
    </>
  );
};

export default StateCars;
