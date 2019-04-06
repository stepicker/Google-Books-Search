import React, { Component } from "react";
import SearchedBook from "../SearchedBook";
import API from "../../utils/API";


class Search extends Component {

    state = {
        search: "",
        results: []
    }

    saveBook = id => {
        API.saveBook(id)
    }

    searchBooks = () => {
        API.getGoogleBooks(this.state.search)
        .then(res => this.setState({ search: "", results: res.data.items}))
        .catch(err => console.log(err));
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
          [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        this.searchBooks();
    };

    render() {
        return (
            <div>
                <form className="form">
                    <input className="input" type="text" name="search" value={this.state.search} onChange={this.handleInputChange} placeholder="Search for a book" />
                    <a className="button is-info" onClick={this.handleFormSubmit}>Search</a>
                </form>
                {this.state.results.map(book => (
                    <SearchedBook
                        key={book.id.toString()}
                        id={book.id}
                        title={book.volumeInfo.title}
                        authors={book.volumeInfo.authors.join(', ')}
                        description={book.volumeInfo.description}
                        image={book.volumeInfo.imageLinks.thumbnail}
                        link={book.volumeInfo.infoLink}
                        saveBook={this.saveBook}
                    />
                ))}
            </div>
        );
    }

}

export default Search;