import { query } from "express-validator"

const searchListingsRules = [
    query("title").optional().isString().trim().escape(),
    query("description").optional().isString().trim().escape(),
    query("minPrice").optional().isFloat({ gt: 0 }),
    query("maxPrice").optional().isFloat({ gt: 0 })
]

export default searchListingsRules;