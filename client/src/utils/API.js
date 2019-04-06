import axios from "axios";

export default {

  // Gets search results from Google Books
  getGoogleBooks: function(keyword) {
    return axios.get(`https://www.googleapis.com/books/v1/volumes?q=${keyword}&key=AIzaSyAaKhQg8i3vQw0QaN6J8QgIx21h52UY_3Q`);
  },

  // Gets all books from the database
  getSavedBooks: function() {
    return axios.get("/api/books/");
  },

  // Saves a book to the database
  saveBook: function(bookData) {
    return axios.post("/api/books", bookData);
  },

  // Deletes the book with the given id from the database
  deleteBook: function(id) {
    return axios.delete("/api/books/" + id);
  }

};