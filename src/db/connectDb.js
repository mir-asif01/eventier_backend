import mongoose from "mongoose"

export const connectDb = async () => {
  try {
    const connection = await mongoose.connect(process.env.MONGO_URI)
    console.log("database connected")
  } catch (error) {
    console.log("Connection failed : ", error)
    process.exit(1)
  }
}
