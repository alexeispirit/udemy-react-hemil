import React from "react";

import "./styles/common.scss";
import "./Button.scss";

/**
 * @author [alexei spirit]
 * @version 1.0.1
 */

function Button({ children, type, onClick }) {
  let localClass = "primary";

  if (type === "primary") {
    localClass = "primary";
  }

  if (type === "disabled") {
    localClass = "disabled";
  }

  const classes = `bgYellow fontBlack no-border pad8 width100 radius15 ${localClass}`.trim();

  return (
    <div className="btnClass">
      <button onClick={onClick} className={classes}>
        {children}
      </button>
    </div>
  );
}

export default Button;
