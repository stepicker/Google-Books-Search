// Express
const express = require("express");
const router = express.Router();

// Axios
const axios = require("axios");

// Database model
const db = require("../models/bookModel.js");


// ROUTES
// ---------------------------------

// Route to get all saved books from the DB
router.get('/api/books', (req, res) => {

    db.Book.find({}).sort({_id: -1})
      .then(function(dbBooks) {
        res.json(dbBooks);
      })
      .catch(function(err) {
        res.json(err);
      });
  
});

// Route to save a new book in the database
router.post("/api/books", (req, res) => {

    db.Book.create(req.body)
      .then(function(dbBooks) {
        res.json(dbBooks);
      })
      .catch(function(err) {
        res.json(err);
      });
  
});

// Route to delete an article
router.delete("/api/books/:id", function(req,res) {

    db.Book.deleteOne({ _id: req.params.id })
    .then(function(dbBooks) {
      res.json(dbBooks);
    })
    .catch(function(err) {
      res.json(err);
    });
  
});

module.exports = router;