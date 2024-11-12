import express from "express"

const app = express()
const port = 3001

app.get("/", (req, res) => {
  res.send("App is running")
})

export { app }
