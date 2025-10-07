import auctionListing from "../../models/listingSchema.js"
import { connectDb, closeDb } from "../../config/connectDb.js"

export const updateListing = async (title, listingInfo) => {
    try {
        await connectDb()
        const modifiedListing = await auctionListing.updateOne({ title }, { $set: listingInfo })

        if(modifiedListing.matchedCount === 0) {
            console.log(`No listing found with title: ${ title } to update`)
        } else {
            console.log(`${ title } updated successfully`)
            console.log(modifiedListing)
        }
    } catch (error) {
        console.error(`Error updating item "${ title }":`, error)
    } finally {
        closeDb()
    }
}