import React, { useRef, useEffect } from "react";

import Input from "./Input";

const inputStyle = {
  width: "400px",
  height: "40px",
  fontSize: "30px",
  marginBottom: "10px"
};

function ReactForwardRef() {
  const firstNameRef = useRef();
  const lastNameRef = useRef();

  useEffect(() => {
    lastNameRef.current.focus();
  }, []);

  const firstNameKeyDown = e => {
    if (e.keyCode === 13) {
      lastNameRef.current.focus();
    }
  };

  const lastNameKeyDown = e => {
    if (e.keyCode === 13) {
      firstNameRef.current.focus();
    }
  };

  return (
    <>
      <Input
        ref={firstNameRef}
        placeholder="firstname"
        style={inputStyle}
        onKeyDown={firstNameKeyDown}
      />
      <Input
        ref={lastNameRef}
        placeholder="lastname"
        style={inputStyle}
        onKeyDown={lastNameKeyDown}
      />
    </>
  );
}

export default ReactForwardRef;
