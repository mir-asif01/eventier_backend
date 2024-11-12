import { app } from "./app.js"
import dotenv from "dotenv"
import { connectDb } from "./db/connectDb.js"

dotenv.config({ path: "./.env" })

connectDb()
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(`App is running on http://localhost:${process.env.PORT}`)
    })
  })
  .catch((error) => {
    console.log("Error while connecting db :", error)
  })
