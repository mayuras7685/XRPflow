const Escrow = require("../models/Escrow")

const calculateMetrics = async () => {
  const totalTransactions = await Escrow.countDocuments()
  const totalBalance = await Escrow.aggregate([
    { $group: { _id: null, total: { $sum: "$amount" } } },
  ])
  return {
    totalTransactions,
    totalBalance: totalBalance[0].total,
  }
}

const fetchAllTransactions = async () => {
  return await Escrow.find({})
}

const getAnalyticsData = async () => {
  // This should contain logic for data analysis and return data in a format suitable for charts
  const transactions = await fetchAllTransactions()
  const dates = transactions.map((tx) => tx.createdAt)
  const amounts = transactions.map((tx) => tx.amount)

  return {
    labels: dates,
    datasets: [
      {
        label: "Transaction Amounts Over Time",
        data: amounts,
        borderColor: "rgba(75,192,192,1)",
        backgroundColor: "rgba(75,192,192,0.2)",
      },
    ],
  }
}

module.exports = {
  calculateMetrics,
  fetchAllTransactions,
  getAnalyticsData,
}
