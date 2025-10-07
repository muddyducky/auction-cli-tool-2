export const addListingPrompt = [
    { type: "input", name: "title", message: "Auction Item Title:" },
    { type: "input", name: "description", message: "Description:" },
    { type: "input", name: "startPrice", message: "Starting Price:", filter: Number },
    { type: "input", name: "reservePrice", message: "Reserve Price:", filter: Number },
    { type: "input", name: "image", message: "Image"}
]