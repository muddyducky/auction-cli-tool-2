import auctionListing from "../../models/listingSchema.js"
import { connectDb, closeDb } from "../../config/connectDb.js"

export const deleteListing = async (title) => {
    try {
        await connectDb()
        const removeListing = await auctionListing.deleteOne({ title: title })

        if(removeListing.deletedCount === 0) {
            console.log(`No listing found with title: ${ title }`)
        } else {
            console.log(`${ title } was removed successfully`)
        }
    } catch (error) {
        console.error(`Error removing listing "${ title }":`, error)
    } finally {
        closeDb()
    }

}