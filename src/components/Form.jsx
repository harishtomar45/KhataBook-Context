import React, { useContext, useEffect, useState } from 'react'
import TransactionsContext from '../context/transactionsContext';

const Form = () => {

  const {saveTransaction, edit, updateTransaction} = useContext(TransactionsContext);

  const [text, setText] = useState("");
  const [amount, setAmount] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault();

    if(edit.isEdit){
      updateTransaction({
        id: edit.transaction.id,
        text: text,
        amount: parseInt(amount),

      }
      )
    }else{
      saveTransaction(text, amount);

    }
     
    setText("");
    setAmount("");
  
  }
 
  
  useEffect(() => {
    setText(edit.transaction.text);
    setAmount(edit.transaction.amount);
  }, [edit]);

  return (
    <>
       <form onSubmit={(e)=>handleSubmit(e)}>
          <input type="text" className="form-control w-100 my-2 p-2 rounded-0"
          placeholder='Enter incom/expances name' 
          required
          onChange={(e)=>setText(e.target.value)}
          value={text}
          />
          <input type="number" className="form-control w-100 my-2 p-2 rounded-0"
          placeholder='Enter incom/expances ' 
          required
          onChange={(e)=>setAmount(e.target.value)}
          value={amount}
          />

          <button className="btn btn-success w-100 my-2 p-2 rounded-0 fw-bold">Save</button>
        </form>
    </>
  )
}

export default Form
