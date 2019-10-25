import React, { useState } from "react";

function ReactOnChange() {
  const [name, setName] = useState("");
  const [income, setIncome] = useState("mid");

  const nameChangeHandler = e => {
    setName(e.target.value);
  };

  const incomeChangeHandler = e => {
    setIncome(e.target.value);
  };

  const submitHandler = e => {
    e.preventDefault();
    console.log(`state = ${name} ${income}`);
  };

  return (
    <form onSubmit={submitHandler}>
      <div>
        <span>Name: </span>
        <input
          type="text"
          value={name}
          onChange={nameChangeHandler}
          name=""
          id=""
        />
      </div>
      <div>
        <span>Income: </span>
        <select value={income} onChange={incomeChangeHandler}>
          <option value="high">High</option>
          <option value="mid">Mid</option>
          <option value="low">Low</option>
        </select>
        <input type="submit" value="submit" />
      </div>
    </form>
  );
}

export default ReactOnChange;
