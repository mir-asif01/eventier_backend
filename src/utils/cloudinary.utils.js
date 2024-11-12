import { v2 as cloudinary } from "cloudinary"
import dotenv from "dotenv"

dotenv.config()

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
})

const uploadFileOnCloudinary = async (filePath) => {
  try {
    if (!filePath) {
      return "No file path found"
    }
    const respponse = await cloudinary.uploader.upload(filePath, {
      resource_type: "auto",
    })
    return respponse
  } catch (error) {
    if (error) {
      console.log(
        `Error while uploading file on cloudinary : ${error?.message}`
      )
    }
  }
}

export { uploadFileOnCloudinary }
