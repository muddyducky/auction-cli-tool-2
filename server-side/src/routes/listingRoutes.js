import express from "express"
import { handleSearchListings } from "../controllers/listingsController.js"
import searchListingsRules  from "../middleware/validation/listingsValidation.js"
import { handleValidationErrors } from "../middleware/validation/handleValidationErrors.js"

const router = express.Router()

router.get("/search", searchListingsRules, handleValidationErrors, handleSearchListings)

export default router