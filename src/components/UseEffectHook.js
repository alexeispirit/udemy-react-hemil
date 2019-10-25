import React, { useState, useEffect } from "react";

let born = false;
function UseEffectHook() {
  const [growth, setGrowth] = useState(0);
  const [nirvana, setNirvana] = useState(false);

  useEffect(() => {
    if (born) {
      document.title = "nirvana attained";
    }
  }, [nirvana]);

  // component mounted
  useEffect(() => {
    console.log(`I am born`);
  }, []);

  // component updated
  useEffect(() => {
    if (born) {
      console.log("learning");
    } else {
      born = true;
    }

    if (growth > 70) {
      setNirvana(true);
    }

    return () => {
      console.log("cleanup");
    };
  });

  const growHandle = () => {
    setGrowth(growth + 10);
  };

  return (
    <>
      <h2>Use Effect</h2>
      <h3>growth: {growth}</h3>
      <button onClick={growHandle}>learn and grow</button>
    </>
  );
}

export default UseEffectHook;
