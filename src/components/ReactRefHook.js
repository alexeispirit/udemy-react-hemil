import React, { useEffect, useRef } from "react";

function ReactRefHook() {
  const nameRef = useRef();
  const ageRef = useRef();
  const marriedRef = useRef();
  const submitRef = useRef();

  useEffect(() => {
    nameRef.current.focus();
  }, []);

  const keyPressHandle = e => {
    if (e.keyCode === 13) {
      if (e.target.id === "nameInput") {
        ageRef.current.focus();
      }
      if (e.target.id === "ageInput") {
        marriedRef.current.focus();
      }
      if (e.target.id === "marriedInput") {
        submitRef.current.focus();
      }
    }
  };

  const clickHandle = e => {
    e.preventDefault();
    console.log("submitted");
  };

  return (
    <>
      <div className="form-field">
        <span>name </span>
        <input
          type="text"
          id="nameInput"
          ref={nameRef}
          onKeyDown={keyPressHandle}
        ></input>
      </div>
      <div className="form-field">
        <span>age </span>
        <input
          type="text"
          id="ageInput"
          ref={ageRef}
          onKeyDown={keyPressHandle}
        ></input>
      </div>
      <div className="form-field">
        <span>married </span>
        <input
          id="marriedInput"
          type="checkbox"
          ref={marriedRef}
          onKeyDown={keyPressHandle}
        ></input>
      </div>
      <button
        id="submitInput"
        ref={submitRef}
        onKeyDown={keyPressHandle}
        onClick={clickHandle}
      >
        Submit
      </button>
    </>
  );
}

export default ReactRefHook;
