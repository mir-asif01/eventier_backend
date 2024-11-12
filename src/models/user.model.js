import mongoose from "mongoose"

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
    },
    profileImage: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
)

export const User = mongoose.model("User", userSchema)
