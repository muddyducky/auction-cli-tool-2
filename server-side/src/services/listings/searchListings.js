import auctionListing from "../../models/listingSchema.js"
import { connectDb, closeDb } from "../../config/connectDb.js"

export const searchListings = async ({ title, description, minPrice, maxPrice }) => {
    console.log("Search input received:", { title, description, minPrice, maxPrice });

    try{
        await connectDb()
        
        const filter = {}

        if(title) filter.title = { $regex: title, $options: "i" }
        if(description) filter.description = { $regex: description, $options: "i" }
        if(minPrice || maxPrice) {
            filter.startPrice = {}
            if(minPrice) filter.startPrice.$gte = Number(minPrice)
            if(maxPrice) filter.startPrice.$lte = Number(maxPrice)    
        }

        console.log("MongoDB filter:", filter);
        const listings = await auctionListing.find(filter)
        return listings

    }   catch(error) {
            console.error("Error searching listings:", error)
            throw error
    }   finally {
            await closeDb()
    }
}