const express = require("express")
const cors = require("cors")
const escrowRoutes = require("./routes/escrowRoutes")

const app = express()
app.use(cors())
app.use(express.json())

app.use("/api/escrow", escrowRoutes)

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
