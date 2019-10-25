import React, { useContext } from "react";
import messageContext from "../context/messageContext";

function Inner() {
  const [message, setMessage] = useContext(messageContext);
  return (
    <>
      <h2>Inner </h2>
      <button onClick={() => setMessage("HET")}>Say no</button>
    </>
  );
}

function Outer() {
  const [message, setMessage] = useContext(messageContext);
  return (
    <>
      <h2>Outer {message}</h2>
      <Inner />
    </>
  );
}

function About() {
  const [message, setMessage] = useContext(messageContext);

  return (
    <>
      <h1>ABOUT {message}</h1>
      <Outer />
    </>
  );
}

export default About;
