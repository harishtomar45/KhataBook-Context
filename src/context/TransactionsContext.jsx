import { createContext, useState } from "react";

const TransactionsContext = createContext();

export const TransactionProvider = ({ children }) => {


    const [transactions, setTransactions] = useState([]);

        
  const [edit, setEdit] = useState({
    transaction: {},
     isEdit: false,
  })


    const deleteAmount = (id) => {
        setTransactions(transactions.filter(transaction => transaction.id !==id))
      }


      const saveTransaction = (text , amount) => {
        const newTransaction = {
          id: crypto.randomUUID(),
          text,
          amount: parseInt(amount),
        }
  
        setTransactions([newTransaction, ...transactions]);
    }




  const editAmount = (transaction) => {
   setEdit({
    transaction: transaction,
    isEdit: true,
   });


  }

  const updateTransaction = (updateTransaction) => {

    setTransactions(
     transactions.map((transaction) =>
      transaction.id === updateTransaction.id ? updateTransaction : transaction
      )
    )

    setEdit({
      transaction: {},
      isEdit: false,
    })
  }



  return (
    <TransactionsContext.Provider value={{transactions, edit, deleteAmount, saveTransaction, editAmount, updateTransaction}} >
      {children}
    </TransactionsContext.Provider>
  );
};

export default TransactionsContext;
