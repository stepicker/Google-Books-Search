require('dotenv').config();

// Express
const express = require("express");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Use API routes
const routes = require("./routes/apiRoutes.js");
app.use(routes);

// Send every other request to the React app
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

// Connect to the database
const mongoose = require("mongoose");
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/googlebooks");

// Listen on the appropriate port
app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});