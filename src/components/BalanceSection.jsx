import React, { useContext } from 'react'
import TransactionsContext from '../context/transactionsContext';

const BalanceSection = () => {
 

  const {transactions} = useContext(TransactionsContext);

  const balance = transactions.reduce((p, c) => {
    return p + c.amount;
  }, 0);

  const expance = transactions
  .filter((transaction) => transaction.amount < 0)
  .reduce((p, c) => {
    return p + c.amount;
  }, 0);


  
  const income = transactions
  .filter((transaction) => transaction.amount > 0)
  .reduce((p, c) => {
    return p + c.amount;
  }, 0);

  return (
    <>
      <div className="my-3 row g-3">
      <div className="col-md-12 col-lg-4">
        <div className="card p-3 rounded-0 bg-info">
          <h1 className="display-6 text-light">Total Income :</h1>
          <h1 className="display-5 text-light">{income}</h1>
        </div>
      </div>
      <div className="col-md-12 col-lg-4">
        <div className="card p-3 rounded-0 bg-danger">
          <h1 className="display-6 text-light">Total Exp :</h1>
          <h1 className="display-5 text-light">{expance}</h1>
        </div>
      </div>
      <div className="col-md-12 col-lg-4">
        <div className="card p-3 rounded-0 bg-warning">
          <h1 className="display-6 text-light">Balance :</h1>
          <h1 className="display-5 text-light"> {balance}</h1>
        </div>
      </div>
    </div>
    </>
  )
}

export default BalanceSection
























