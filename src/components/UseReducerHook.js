import React, { useReducer } from "react";

const initState = {
  count: 0
};

function reducer(state, action) {
  switch (action.type) {
    case "INC":
      return { count: state.count + 1 };
    case "DEC":
      return { count: state.count - 1 };
    default:
      return state;
  }
}

function UseReducerHook() {
  const [state, dispatch] = useReducer(reducer, initState);

  function plusOne() {
    dispatch({ type: "INC" });
  }

  function minusOne() {
    dispatch({ type: "DEC" });
  }

  return (
    <div>
      <h2>useReducer example</h2>
      <h3>Count: {state.count}</h3>
      <button onClick={plusOne}>Plus One</button>
      <button onClick={minusOne}>Minus One</button>
    </div>
  );
}

export default UseReducerHook;
