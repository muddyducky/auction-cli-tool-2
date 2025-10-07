import auctionListing from "../../models/listingSchema.js"
import { connectDb, closeDb } from "../../config/connectDb.js"

export const createListing = async (newListing) => {
    try {
        await connectDb();
        const addListing = await auctionListing.create(newListing)
        console.log("New listing created:")
        console.log(addListing)
    } catch (error) {
        console.error("Error adding new item", error)
    } finally {
        closeDb()
    }
}