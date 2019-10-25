import React, { useContext } from "react";
import messageContext from "../context/messageContext";

function Home() {
  const message = useContext(messageContext);
  return <h1>HOME {message}</h1>;
}

export default Home;
