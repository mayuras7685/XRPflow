import React, { useEffect, useState } from "react"
import { fetchTransactionDetails } from "../services/escrowService"

const TransactionSummary = () => {
  const [transactions, setTransactions] = useState([])

  useEffect(() => {
    fetchTransactionDetails().then(setTransactions)
  }, [])

  return (
    <div className="transactions">
      <h2>Transaction Summary</h2>
      <ul>
        {transactions.map((tx) => (
          <li key={tx.transactionId}>
            Transaction ID: {tx.transactionId}, Amount: ${tx.amount}, Status:{" "}
            {tx.status}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default TransactionSummary
