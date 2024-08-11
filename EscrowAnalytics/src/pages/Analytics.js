import React from "react"
import { Line } from "react-chartjs-2"
import { fetchAnalyticsData } from "../services/escrowService"

const Analytics = () => {
  const [data, setData] = React.useState({})

  useEffect(() => {
    fetchAnalyticsData().then(setData)
  }, [])

  return (
    <div className="analytics">
      <h1>Escrow Analytics</h1>
      <Line data={data} />
    </div>
  )
}

export default Analytics
