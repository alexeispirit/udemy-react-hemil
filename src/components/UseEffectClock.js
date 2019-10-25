import React, { useState, useEffect } from "react";

const initXY = {
  x: null,
  y: null
};

function UseEffectClock() {
  const [time, setTime] = useState(Date);
  const [xy, setXY] = useState(initXY);

  useEffect(() => {
    let handle = setInterval(() => {
      setTime(Date);
    }, 1000);

    return () => {
      clearInterval(handle);
    };
  });

  const mouseMoveHandle = e => {
    setXY({
      x: e.clientX,
      y: e.clientY
    });
  };

  useEffect(() => {
    window.addEventListener("mousemove", mouseMoveHandle);
    // return () => {
    //   window.removeEventListener("mousemove", mouseMoveHandle);
    // };
  }, []);

  return (
    <>
      <h2>Use effect example</h2>
      <h3>Date & Time: {time}</h3>
      <h3>{`x: ${xy.x}, y:${xy.y}`}</h3>
    </>
  );
}

export default UseEffectClock;
