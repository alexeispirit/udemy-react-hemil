import React from "react";
import { BrowserRouter, Route, NavLink } from "react-router-dom";

import ReduxHome from "../pages/ReduxHome";
import ReduxDeposit from "../pages/ReduxDeposit";
import ReduxWithdraw from "../pages/ReduxWithdraw";

function ReactRedux() {
  return (
    <BrowserRouter>
      <ul>
        <li className="li-style">
          <NavLink to="/" className="App-link">
            Home
          </NavLink>
        </li>
        <li className="li-style">
          <NavLink to="/deposit" className="App-link">
            Deposit
          </NavLink>
        </li>
        <li className="li-style">
          <NavLink to="/withdraw" className="App-link">
            Withdraw
          </NavLink>
        </li>
      </ul>
      <Route path="/" exact component={ReduxHome} />
      <Route path="/deposit" exact component={ReduxDeposit} />
      <Route path="/withdraw" exact component={ReduxWithdraw} />
    </BrowserRouter>
  );
}

export default ReactRedux;
