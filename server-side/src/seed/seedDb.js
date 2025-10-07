import { connectDb, closeDb } from "../config/connectDb.js"
import auctionListing from "../models/listingSchema.js"
import { auctionData } from "./auctionData.js"

export const seedDb = async () => {
    try {
        await connectDb()
        await auctionListing.insertMany(auctionData)
        console.log("Successfully seeded data to database")
    } catch (error) {
        console.log("Error seeding data:", error.message)
    } finally {
        closeDb()
    }
}

