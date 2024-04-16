import React, { useContext } from 'react'
import TransactionsContext from '../context/transactionsContext'

const ListItem = ({transaction,   editAmount}) => {


  const {deleteAmount} = useContext(TransactionsContext);


  return (
    <>
        <li className={transaction.amount > 0 ? "list-group-item rounded-0 bg-success" : "list-group-item rounded-0 bg-danger"}>
      <h1 className="text-light display-6">
        {transaction.text} : {transaction.amount}
      </h1>
      <span className="float-end">  
        <button className='btn btn-outline-warning rounded-0 mx-2' onClick={()=> editAmount(transaction)}>
          EDIT
        </button>
        <button className='btn btn-outline-light rounded-0 mx-2' onClick={()=> deleteAmount(transaction.id)}>
          DELETE
        </button>
      </span>
    </li>
    </>
  )
}

export default ListItem
