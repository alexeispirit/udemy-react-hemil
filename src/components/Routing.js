import React, { useState } from "react";
import {
  BrowserRouter,
  Route,
  Link,
  NavLink,
  Redirect,
  Prompt
} from "react-router-dom";

import About from "../pages/About";
import Home from "../pages/Home";
import messageContext from "../context/messageContext";

function Routing(params) {
  const [loggedIn, setLoggedIn] = useState(false);
  const [age, setAge] = useState(null);
  const [message, setMessage] = useState("Shared");

  const loginHandle = () => {
    setLoggedIn(!loggedIn);
  };

  const changeHandle = e => {
    setAge(e.target.value);
  };

  return (
    <BrowserRouter>
      <messageContext.Provider value={[message, setMessage]}>
        <ul className="ul-style">
          <li>
            <NavLink
              exact
              to="/"
              className="li-style"
              activeClassName="link-active-style"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              exact
              to="/about"
              className="li-style"
              activeClassName="link-active-style"
            >
              About
            </NavLink>
          </li>
          {loggedIn ? (
            <li>
              <NavLink
                exact
                to="/user/alex"
                className="li-style"
                activeClassName="link-active-style"
              >
                Alex
              </NavLink>
            </li>
          ) : null}
        </ul>

        <Prompt
          when={loggedIn && !age}
          message={location =>
            location.pathname.startsWith("/user") ? true : "Are you sure?"
          }
        />

        <button onClick={loginHandle}>{loggedIn ? "logout" : "login"}</button>

        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route
          exact
          path="/user/:name"
          render={({ match }) => {
            return loggedIn ? (
              <>
                <h2>Age: {age}</h2>
                <input type="text" value={age} onChange={changeHandle} />
                <h1>{match.params.name}</h1>
              </>
            ) : (
              <Redirect to="/" />
            );
          }}
        />
      </messageContext.Provider>
    </BrowserRouter>
  );
}

export default Routing;
