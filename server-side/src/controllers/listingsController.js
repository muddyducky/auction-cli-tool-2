import { searchListings } from "../services/listings/searchListings.js";

export const handleSearchListings = async (req, res) => {
    const { title, description, minPrice, maxPrice } = req.query
    console.log("Query received:", req.query)
    try {
        const results = await searchListings({ title, description, minPrice, maxPrice })
        res.status(200).json(results)
    } catch (error) {
        console.error("Search error:", error)
        res.status(500).json({ error: "Internal server error"})
    }
}