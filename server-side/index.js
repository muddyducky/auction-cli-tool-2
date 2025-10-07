import express from "express"
import morgan from "morgan"
import dotenv from "dotenv"
dotenv.config()

import listingRoute from "./src/routes/listingRoutes.js"

//__ CONFIG __
const app = express()
const PORT = process.env.PORT || 4000

//___ MIDDLEWARE ___
app.use(express.json())
app.use(morgan("dev"))

//___ ROUTES ___
app.use("/api", listingRoute)

//___ PORT ___
app.listen(PORT, () => console.log(`Server is connected at http://localhost:${ PORT }`))

