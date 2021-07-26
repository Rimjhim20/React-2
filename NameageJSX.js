import React from "react";
const NameageJSX = ({ nameAndAgeObject, setCount }) => {
  console.log({ ...nameAndAgeObject });
  return (
    <div className="App">
      <h1>Name and Age</h1>
      <h2>{nameAndAgeObject.name}</h2>
      <h2>{nameAndAgeObject.age}</h2>
      <button className="btn"
        onClick={() => setCount({ ...nameAndAgeObject, name: "Rimjhim" })}>
        Change Name
      </button>
      <button className="btn" onClick={() => setCount({ ...nameAndAgeObject, age: 20 })}>
        Change age
      </button>
    </div>
  );
};
export default NameageJSX;
