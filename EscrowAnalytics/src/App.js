import React from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import EscrowDashboard from "./components/EscrowDashboard"
import Reports from "./pages/Reports"
import Analytics from "./pages/Analytics"
import Header from "./components/Header"
import Footer from "./components/Footer"

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<EscrowDashboard />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/analytics" element={<Analytics />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
