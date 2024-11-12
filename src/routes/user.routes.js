import { Router } from "express"
import { getHello } from "../controllers/user.controller.js"

const router = Router()

router.route("/hello-user").get(getHello)

export default router
