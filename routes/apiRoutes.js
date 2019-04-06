// Express
const express = require("express");
const router = express.Router();
const axios = require("axios");

// Database model
const db = require("../models/bookModel.js");


// ROUTES
// ---------------------------------

// Route to get books
router.get('/api/booksearch/:search', (req, res) => {

  axios.get(`https://www.googleapis.com/books/v1/volumes?q=${req.params.search}&key=AIzaSyD5766a0RsPCdD5HUIbB8FI-iamHOuWQS0`)
  .then(function(results) {
    console.log("Api result: ", results.data);
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

  db.Book.deleteOne({ _id: req.params.id })
  .then(function(dbBooks) {
    res.json(dbBooks);
  })
  .catch(function(err) {
    res.json(err);
  });
  
});

module.exports = router;