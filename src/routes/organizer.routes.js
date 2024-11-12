import { Router } from "express"
import { getHello } from "../controllers/organizer.controller.js"

const router = Router()

router.route("/organizer-hello").get(getHello)

export default router
