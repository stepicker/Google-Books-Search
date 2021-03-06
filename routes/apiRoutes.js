// Express
const express = require("express");
const router = express.Router();
const axios = require("axios");

// Database model
const db = require("../models");


// ROUTES
// ---------------------------------

// Route to get books from Google
router.get('/api/booksearch/:search', (req, res) => {

  axios.get(`https://www.googleapis.com/books/v1/volumes?q=${req.params.search}&key=${process.env.GOOGLE_KEY}`)
  .then(function(results) {
    res.json(results.data);
  })
  .catch(function(err) {
    res.json(err);
  });
  
});

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

// Route to delete a book from the database
router.delete("/api/books/:id", function(req,res) {

  db.Book.deleteOne({ id: req.params.id })
  .then(function(dbBooks) {
    res.json(dbBooks);
  })
  .catch(function(err) {
    res.json(err);
  });
  
});

module.exports = router;