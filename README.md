# Google-Books-Search

First assignment building a complete MERN application at the Penn Coding Bootcamp.

## How It Works

The home page allows users to search for a book by keyword, using the Google Books API.

Each search results will include two buttons:
* a link to open the full Google Books page about the selected book (in a new tab)
* a command to save the details of that book to the database

All saved books will be available in the Saved page, each showing two buttons:
* one to open the full Google Books page about the selected book
* one to delete that book from the database

## Under the Hood

This application uses the following technologies:
* Node.js server with Express.js router
* Google Books API
* MongoDB database
* React with React Router

Other packages leveraged by this application include:
* Axios for all API calls
* Dotenv to hide the Google Books API key
* Mongoose to manage the MongoDB database

## Link

Here's the deployed version: http://book-picker.herokuapp.com/
