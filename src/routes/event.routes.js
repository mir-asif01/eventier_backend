import { Router } from "express"
import { getHello } from "../controllers/event.controller.js"
const router = Router()

router.route("/hello-event").get(getHello)

export default router
