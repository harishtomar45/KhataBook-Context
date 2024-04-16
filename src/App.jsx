import React, { useState } from 'react'
import Navbar from './components/Navbar'
import BalanceSection from './components/BalanceSection'
import Form from './components/Form'
import ListGroup from './components/ListGroup'
import { TransactionProvider } from './context/transactionsContext'

const App = () => {

  
  return (
    <TransactionProvider>
      <Navbar/>
      <div className="container p-2">
       <Form />
        <BalanceSection/>
        <ListGroup  />
      </div>
    </TransactionProvider>
  )
}

export default App;
