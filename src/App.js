import React from "react";
import "./App.css";

// import ReactFundamentals from "./components/ReactFundamentals";
// import ReactOnChange from "./components/ReactOnChange";
// import ReactRefHook from "./components/ReactRefHook";
// import ReactForwardRef from "./components/ReactForwardRef";
// import UseEffectHook from "./components/UseEffectHook";
// import UseEffectClock from "./components/UseEffectClock";
// import UseEffectAsync from "./components/UseEffectAsync";
// import UseMemoHook from "./components/UseMemoHook";
// import UsePreviousCustomHook from "./components/UsePreviousCustomHook";
// import UseLayoutEffectHook from "./components/UseLayoutEffectHook";
// import UseCustonFetchHook from "./components/UseCustonFetchHook";
import Routing from "./components/Routing";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Routing />
      </header>
    </div>
  );
}

export default App;
