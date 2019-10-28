import React, { useState, useEffect } from "react";

import "./TicTacToe.css";

const initMatrix = [];

function TicTacToe() {
  const [matrix, setMatrix] = useState(initMatrix);
  const [matrixSize, setMatrixSize] = useState(3);
  const [currentPlayer, setCurrentPlayer] = useState("o");
  const [selR, setSelR] = useState(null);
  const [selC, setSelC] = useState(null);
  const [winner, setWinner] = useState(false);
  const [reset, setReset] = useState(false);

  useEffect(() => {
    setWinner(false);
    setSelC(null);
    setSelR(null);

    const row = new Array(matrixSize).fill(null);

    const tempMatrix = [];

    for (let i = 0; i < matrixSize; i++) {
      tempMatrix.push([...row]);
    }

    setMatrix(tempMatrix);
  }, [reset]);

  function squareClick(r, c) {
    if (!matrix[r][c] && !winner) {
      setSelC(c);
      setSelR(r);
      let nextPlayer = currentPlayer === "x" ? "o" : "x";
      setCurrentPlayer(nextPlayer);

      const matrixCopy = [...matrix];
      matrixCopy[r][c] = nextPlayer;
      setMatrix(matrixCopy);
    }
  }

  function isWinner() {
    let vertical = true;
    let horizontal = true;
    let d1 = true;
    let d2 = true;

    if (selC === null || selR === null) {
      return false;
    }

    for (let i = 0; i < matrixSize; i++) {
      if (matrix[i][selC] !== currentPlayer) {
        vertical = false;
      }

      if (matrix[selR][i] !== currentPlayer) {
        horizontal = false;
      }

      if (matrix[i][i] !== currentPlayer) {
        d1 = false;
      }

      if (matrix[i][matrixSize - i - 1] !== currentPlayer) {
        d2 = false;
      }
    }

    if (vertical || horizontal || d1 || d2) {
      setWinner(true);
    }
  }

  useEffect(() => {
    if (!winner) {
      isWinner();
    }
  });

  function resetGame() {
    setReset(!reset);
  }

  return (
    <>
      <button onClick={resetGame}>Reset</button>
      <div>
        {matrix.map((row, c) => (
          <div className="c">
            {row.map((val, r) => (
              <div onClick={() => squareClick(r, c)} className="r">
                {matrix[r][c]}
              </div>
            ))}
          </div>
        ))}
      </div>
      <h2>{winner ? `player ${currentPlayer} is winner` : null}</h2>
    </>
  );
}

export default TicTacToe;
