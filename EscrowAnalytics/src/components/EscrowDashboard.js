import React, { useEffect, useState } from "react"
import { fetchEscrowMetrics } from "../services/escrowService"

const EscrowDashboard = () => {
  const [metrics, setMetrics] = useState({})

  useEffect(() => {
    fetchEscrowMetrics().then(setMetrics)
  }, [])

  return (
    <div className="dashboard">
      <h1>Escrow Dashboard</h1>
      <p>Total Transactions: {metrics.totalTransactions}</p>
      <p>Total Escrow Balance: ${metrics.totalBalance}</p>
    </div>
  )
}

export default EscrowDashboard
