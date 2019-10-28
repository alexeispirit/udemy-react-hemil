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
// import ReactRedux from "./components/ReactRedux";
// import UseReducerHook from "./components/UseReducerHook";
// import ReactTesting from "./components/ReactTesting";
// import TicTacToe from "./tic-tac-toe/TicTacToe";
// import DraggableList from "./draggable-list/DraggableList";
import CustomButtonLibrary from "./components/CustomButtonLibrary";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <CustomButtonLibrary />
      </header>
    </div>
  );
}

export default App;
