import React, { useState, useEffect, useMemo } from "react";

let renderCount = 0;
function Child() {
  useEffect(() => {
    renderCount++;
  });

  return <div>render count: {renderCount}</div>;
}

function UseMemoHook() {
  const [i, setI] = useState(0);

  const onClickHandle = () => {
    setI(i + 1);
  };

  const memoChild = useMemo(() => {
    return <Child />;
  }, [i]);

  return (
    <>
      <h2>Use Memo</h2>
      <h3>i: {i}</h3>
      <button onClick={onClickHandle}>Inc I</button>
      <h5>normal render</h5>
      <Child />
      <h5>memo render</h5>
      {memoChild}
    </>
  );
}

export default UseMemoHook;
