# 🛠️ Auction CLI Tool – Mission 5 Phase 1

A modular command-line interface (CLI) application for managing auction listings with full CRUD functionality. Built using the MERN stack, this tool demonstrates dynamic command rendering, middleware validation, and clean separation of concerns—all within a terminal-based experience.

---

## 📖 Project Overview

This CLI tool was developed as part of Mission 5 to explore backend architecture and command-line interaction. It allows users to create, read, update, delete, and search auction listings directly from the terminal.

The project began with initializing the `index.js` file and installing core dependencies. From there, the app was connected to MongoDB using Mongoose, and a schema was created to define the structure of auction listings. CRUD logic was built around this schema, supported by middleware for input validation and error handling.

To streamline command definitions, an array of objects was used to configure each CLI command. This approach prevents repetition and allows the program to dynamically render commands using Commander and Inquirer.

---

## 📦 Dependencies

This project uses the following packages:

- **axios** – Handles HTTP requests to external APIs  
- **commander** – Manages CLI command definitions and routing  
- **dotenv** – Loads environment variables from `.env` files  
- **express** – Sets up the backend server and API routes  
- **express-validator** – Validates incoming request data  
- **inquirer** – Creates interactive terminal prompts  
- **mongoose** – Connects to MongoDB and defines schemas  
- **morgan** – Logs HTTP requests for debugging  
- **nodemon** – Automatically restarts the server during development

---

## 🧱 Tech Stack

- **MongoDB** – NoSQL database  
- **Express** – Backend framework  
- **React** – (Planned for future UI integration)  
- **Node.js** – Runtime environment  

---

## 🚀 Getting Started

### Clone the Repository

```bash
git clone https://github.com/muddyducky/auction-cli-tool-2.git
cd auction-cli-tool-2
