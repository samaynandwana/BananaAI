// Import statements
import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import routes from "./routes/routes.js";

// Load the .env file with secrets
dotenv.config();

// Create the mongodb database connection
const mongoString = process.env.DATABASE_URL;
mongoose.connect(mongoString);
const database = mongoose.connection;

// Print to console upon database connection failure
database.on('error', (error) => {
  console.log(error);
});

// Print to console upon database connection success
database.once('connected', () => {
  console.log('Database Connected');
});

// Create the express app
const app = express();

// Load the appropriate middleware
app.use(express.json());
app.use('/api', routes);

// Print to console upon successful server creation
app.listen(3000, () => {
  console.log(`Server Started at ${3000}`)
});