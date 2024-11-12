import express from "express"
import cors from "cors"
const app = express()

app.use(cors())
app.use(express.json({ limit: "16kb" }))

import userRouter from "./routes/user.routes.js"
import organizerRouter from "./routes/organizer.routes.js"
import eventRouter from "./routes/event.routes.js"

app.get("/", (req, res) => {
  res.status(200).json({ message: "Server running" })
})

app.use("/api/v1/user/", userRouter)
app.use("/api/v1/organizer", organizerRouter)
app.use("/api/v1/event", eventRouter)
export { app }
