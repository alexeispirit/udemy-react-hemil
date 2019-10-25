import React, { useState, useRef, useLayoutEffect } from "react";

function useDim(el, val) {
  const [height, setHeight] = useState(0);
  const [width, setWidth] = useState(0);
  useLayoutEffect(() => {
    let boundingBox = el.current.getBoundingClientRect();
    setHeight(boundingBox.height);
    setWidth(boundingBox.width);
  }, [val]);

  return { height, width };
}

function UseLayoutEffectHook() {
  const [val, setVal] = useState(2);
  const valEl = useRef(null);

  const { height, width } = useDim(valEl, val);

  return (
    <>
      <h1>
        Height: {height} Width: {width}
      </h1>
      <div ref={valEl}>{val}</div>
      <button onClick={() => setVal(val * 10)}>10</button>
    </>
  );
}

export default UseLayoutEffectHook;
