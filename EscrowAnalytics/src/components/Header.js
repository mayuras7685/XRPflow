import React from "react"
import { Link } from "react-router-dom"

const Header = () => {
  return (
    <header>
      <h1>Escrow Analytics Tool</h1>
      <nav>
        <Link to="/">Dashboard</Link> |<Link to="/reports">Reports</Link> |
        <Link to="/analytics">Analytics</Link>
      </nav>
    </header>
  )
}

export default Header
