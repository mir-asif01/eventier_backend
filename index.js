import express from "express"

const app = express()
const port = 3001

app.get("/", (req, res) => {
  res.send("App is running")
})

app.listen(port, () => {
  console.log(`app is running on http://localhost:3001/`)
})
