import React, { Component } from "react";
import SavedBook from "../SavedBook";
import API from "../../utils/API";


class Saved extends Component {

    state = {
        books: []
    }

    getSavedBooks = () => {
        API.getSavedBooks(this.state.search)
        .then(res => {
            console.log("Saved books: ", res.data);
            this.setState( { books: res.data } );
        })
        .catch(err => console.log(err));
    }

    componentDidMount() {
        this.getSavedBooks();
    }

    deleteBook = bookID => {
        API.deleteBook(bookID)
        .then(res => {
            console.log("Updated list of saved books: ", res);
            this.setState( { books: res } );
        })
        .catch(err => console.log(err));
    }

    render() {
        console.log("State: ", this.state);
        return (
            <div>
                {this.state.books.map(book => (
                    <SavedBook
                        key={book.id.toString()}
                        id={book.id}
                        title={book.title}
                        authors={book.authors}
                        description={book.description}
                        image={book.image}
                        link={book.link}
                        deleteBook={this.deleteBook}
                    />
                ))}
            </div>
        );
    }

}

export default Saved;