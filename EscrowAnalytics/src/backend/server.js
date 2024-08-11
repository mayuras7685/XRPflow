const express = require("express")
const cors = require("cors")
const helmet = require("helmet")
const morgan = require("morgan")
const { Server } = require("socket.io")
const escrowRoutes = require("./routes/escrowRoutes")
const connectDB = require("./config/db")

const app = express()
app.use(cors())
app.use(express.json())
app.use(helmet())
app.use(morgan("combined")) // Logging

connectDB() // Connect to MongoDB

app.use("/api/escrow", escrowRoutes)

const PORT = process.env.PORT || 5000
const server = app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})

const io = new Server(server, {
  cors: {
    origin: "*",
  },
})

io.on("connection", (socket) => {
  console.log("a user connected")
  // Handle real-time events
})
