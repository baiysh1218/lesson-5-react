import React, { useEffect, useState } from "react";

const Pokemons = () => {
  const [inp1Value, setInp1Value] = useState("");
  const [inp2Value, setInp2Value] = useState("");

  // ! коллбэк работает один раз при рендере страницы, так как массив зависимостей путей
  // useEffect(() => {
  //   console.log("useEfect!");
  // }, []);

  // ! следит за измением в сайте inp1Value и inp2Value
  // useEffect(() => {
  //   console.log("useEfect!");
  // }, [inp1Value, inp2Value]);

  // ! следит за измением во всех стейтах
  useEffect(() => {
    console.log("useEfect!");
  });

  return (
    <div>
      <input
        value={inp1Value}
        onChange={e => setInp1Value(e.target.value)}
        type="text"
        placeholder="input 1"
      />
      <input
        value={inp2Value}
        onChange={e => setInp2Value(e.target.value)}
        type="text"
        placeholder="input 2"
      />
    </div>
  );
};

export default Pokemons;
