import React from "react";
import { useSelector, useDispatch } from "react-redux";

function ReduxHome() {
  const balance = useSelector(state => state.balanceReducer.balance);
  const loan = useSelector(state => state.loanReducer.loan);
  const dispatch = useDispatch();

  const onLoanHandle = () => {
    dispatch({ type: "APPLY" });
  };

  return (
    <div>
      <h1>Balance: {balance}</h1>
      <h1>{loan ? "Loan Applied" : "Loan Needed"}</h1>
      <button disabled={loan} className="button-style" onClick={onLoanHandle}>
        {loan ? "Loan Applied" : "Apply for loan"}
      </button>
    </div>
  );
}

export default ReduxHome;
