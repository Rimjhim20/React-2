import React, { useState } from "react";
import CounterJSX from "./NameageJSX";
const Nameage = () => {
  const [count, setCount] = useState({ name: "Anish", age: 21 });
  return (
    <div>
      <CounterJSX nameAndAgeObject={count} setCount={setCount} />
    </div>
  );
};

export default  Nameage;
