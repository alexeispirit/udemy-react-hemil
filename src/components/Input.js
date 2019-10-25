import React, { forwardRef } from "react";

function Input({ placeholder, style, onKeyDown }, ref) {
  return (
    <input
      onKeyDown={onKeyDown}
      ref={ref}
      type="text"
      placeholder={placeholder}
      style={style}
    ></input>
  );
}

export default forwardRef(Input);
