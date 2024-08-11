const mongoose = require("mongoose")

const EscrowSchema = new mongoose.Schema({
  transactionId: String,
  amount: Number,
  status: String,
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
})

const Escrow = mongoose.model("Escrow", EscrowSchema)
module.exports = Escrow
