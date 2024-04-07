import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import Header from './Header';
import ReceiptUpload from './ReceiptUpload';
import ExpenseManager from './ExpenseManager';
import Footer from './Footer';
import ReceiptDisplay from './ReceiptDisplay';

function App() {
  const [receiptData, setReceiptData] = useState(null); // This state holds receipt data
  const [onEdit, setOnEdit] = useState(false); // This state determines if the receipt is being edited

  return (
    <div className="App">
      <Header />
      <ReceiptUpload />
      {/* TODO: Pass props as needed to ReceiptDisplay */}
      <ReceiptDisplay receiptData={receiptData} onEdit={onEdit} />
      <ExpenseManager />
      <Footer />
    </div>
  );
}

export default App;
