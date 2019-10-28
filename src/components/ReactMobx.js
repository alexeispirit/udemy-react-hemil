import React from "react";
import { observer, useObservable } from "mobx-react-lite";

const ReactMobx = observer(() => {
  const store = useObservable({
    count: 1,
    addOne() {
      store.count++;
    },
    subOne() {
      store.count--;
    }
  });

  function addOneHandle() {
    store.addOne();
  }
  function subOneHanlde() {
    store.subOne();
  }

  return (
    <div>
      <h1>Count: {store.count}</h1>
      <button onClick={addOneHandle}>Add One</button>
      <button onClick={subOneHanlde}>Sub One</button>
    </div>
  );
});

export default ReactMobx;
