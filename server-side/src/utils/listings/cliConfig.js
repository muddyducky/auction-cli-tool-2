import { createListing } from "../../services/listings/createListing.js"
import { deleteListing } from "../../services/listings/deleteListing.js"
import { updateListing } from "../../services/listings/updateListing.js"
import { searchListingReq } from "../../services/listings/api/searchListingsReq.js"
import { seedDb } from "../../seed/seedDb.js"
import { addListingPrompt } from "./listingPrompt.js"

export const cliCommands = [
    {
        name: "create",
        alias: "c",
        description: "Create a new auction listing",
        prompt: addListingPrompt,
        action: async (answers) => await createListing(answers)
    },
    {
        name: "delete <title>",
        alias: "d",
        description: "Delete an auction listing by title",
        action: async (title) => await deleteListing(title)
    },
    {
        name: "update <title>",
        alias: "u",
        description: "Update an auction listing",
        prompt: addListingPrompt,
        action: async (title, answers) => await updateListing(title, answers)
    },
    {
        name: "search <title>",
        alias: "r",
        description: "Search auction listings",
        action: async (title) => await searchListingReq({ title })
    },
    {
        name: "seed",
        alias: "sd",
        description: "Seed dummy data",
        action: async () => await seedDb()
    },
]