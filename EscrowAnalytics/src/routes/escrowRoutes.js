const express = require("express")
const {
  getEscrowMetrics,
  getTransactionDetails,
  getAnalyticsData,
} = require("../controllers/escrowController")
const router = express.Router()

router.get("/metrics", getEscrowMetrics)
router.get("/transactions", getTransactionDetails)
router.get("/analytics", getAnalyticsData)

module.exports = router
