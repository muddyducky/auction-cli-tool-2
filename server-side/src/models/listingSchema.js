import mongoose from "mongoose";

const listingSchema = new mongoose.Schema ({
    title: { type: String, required: true },
    description: { type: String, required: true },
    startPrice: { type: Number, required: true },
    reservePrice: { type: Number },
    image: { type: String },
    createdAt: { type: Date, default: Date.now }
})

const auctionListing = mongoose.model("auctionListing", listingSchema)

export default auctionListing;