const EscrowService = require("../services/escrowService")

const getEscrowMetrics = async (req, res) => {
  try {
    const metrics = await EscrowService.calculateMetrics()
    res.json(metrics)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

const getTransactionDetails = async (req, res) => {
  try {
    const transactions = await EscrowService.fetchAllTransactions()
    res.json(transactions)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

const getAnalyticsData = async (req, res) => {
  try {
    const analyticsData = await EscrowService.getAnalyticsData()
    res.json(analyticsData)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

module.exports = {
  getEscrowMetrics,
  getTransactionDetails,
  getAnalyticsData,
}
