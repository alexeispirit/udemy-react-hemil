import React from "react";
import { useSelector, useDispatch } from "react-redux";

import * as balanceActions from "../actions/balanceActions";

function ReduxDeposit() {
  const balance = useSelector(state => state.balanceReducer.balance);
  const loading = useSelector(state => state.balanceReducer.loading);
  const loan = useSelector(state => state.loanReducer.loan);
  const dispatch = useDispatch();

  const onDepositHandle = () => {
    dispatch(balanceActions.depositAsync());
  };

  return (
    <div>
      {loading ? <h1>saving......</h1> : <h1>Balance: {balance}</h1>}
      {loan ? <h1>Loan Applied</h1> : null}
      <button onClick={onDepositHandle}>Deposit</button>
    </div>
  );
}

export default ReduxDeposit;
