import React, { useState } from "react";
import usePrevious from "../hooks/usePrevious";

function UsePreviousCustomHook() {
  const [age, setAge] = useState(21);
  const previousAge = usePrevious(age);

  return (
    <>
      <h2>Current age: {age}</h2>
      <h2>Previous age: {previousAge}</h2>
      <button onClick={() => setAge(age - 1)}>Make me younger</button>
    </>
  );
}

export default UsePreviousCustomHook;
