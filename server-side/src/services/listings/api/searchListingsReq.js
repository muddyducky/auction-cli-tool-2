import axios from "axios"
const API = process.env.SEARCH_API;

export const searchListingReq = async ({ title }) => {
    try {
        const res = await axios.get(API, {
            params: { title }
        })
        console.log("Results found:", res.data.length)
        console.log("Listings", res.data)
    } catch (error) {
        console.error(" API request failed:", error.message)
    }
}