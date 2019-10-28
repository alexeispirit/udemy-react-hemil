import React from "react";
import { useSelector, useDispatch } from "react-redux";

function ReduxWithdraw() {
  const balance = useSelector(state => state.balanceReducer.balance);
  const loan = useSelector(state => state.loanReducer.loan);
  const dispatch = useDispatch();

  const onWithdrawHandle = () => {
    dispatch({ type: "WITHDRAW", payload: 10 });
  };

  return (
    <div>
      <h1>Balance: {balance}</h1>
      {loan ? <h1>Loan Applied</h1> : null}
      <button onClick={onWithdrawHandle}>Withdraw</button>
    </div>
  );
}

export default ReduxWithdraw;
