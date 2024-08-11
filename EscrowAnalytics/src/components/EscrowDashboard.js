import React, { useEffect, useState } from "react"
import { fetchEscrowMetrics } from "../services/escrowService"
import { Line } from "react-chartjs-2"
import { Chart as ChartJS } from "chart.js"

const EscrowDashboard = () => {
  const [metrics, setMetrics] = useState({})
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    fetchEscrowMetrics().then(setMetrics)
  }, [])

  const handleToggleDarkMode = () => {
    setDarkMode(!darkMode)
    document.body.classList.toggle("dark-mode", !darkMode)
  }

  return (
    <div className={`dashboard ${darkMode ? "dark-mode" : ""}`}>
      <h1>Escrow Dashboard</h1>
      <button onClick={handleToggleDarkMode}>Toggle Dark Mode</button>
      <p>Total Transactions: {metrics.totalTransactions}</p>
      <p>Total Escrow Balance: ${metrics.totalBalance}</p>
      {/* Add more metrics and charts as needed */}
    </div>
  )
}

export default EscrowDashboard
