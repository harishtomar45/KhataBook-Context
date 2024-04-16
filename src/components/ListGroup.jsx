import React, { useContext } from 'react'
import ListItem from './ListItem'
import TransactionsContext from '../context/transactionsContext';

const ListGroup = () => {


  const {transactions, deleteAmount,editAmount} = useContext(TransactionsContext);


  if (transactions.length === 0) {
    return (
      <h1 className="text-center mt-5 text-secondary">No Transactions Yet</h1>
    );
  }


  
  return (
    <>
      <div className="my-5">
      <h3 className="text-secondary">All Transactions : </h3>
      <ul className="my-3 list-group">
        {
          transactions.map((transaction)=>(
            <ListItem key={transaction.id} transaction={transaction}  editAmount={editAmount}/>
          ))
        }
      </ul>
    </div> 
    </>
  )
}

export default ListGroup
