import React, { Component } from "react";
import SearchedBook from "../SearchedBook";
import API from "../../utils/API";


class Search extends Component {

    state = {
        search: "",
        results: []
    }

    searchBook = () => {
        console.log("Searching for: ", this.state.search);
        API.getGoogleBooks(this.state.search)
        .then(res => {
            console.log("Results: ", res.data.items);
            this.setState( { results: res.data.items } )
        })
        .catch(err => console.log(err));
    }

    saveBook = bookObject => {
        API.saveBook(bookObject)
        .then(res => console.log(res))
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
        this.searchBook();
    };

    styles = {
        form: {
            width: "90%",
            maxWidth:"400px",
            margin: "10px",
            display: "flex",
            justifyContent: "flex-start"
        }
    };

    render() {
        return (
            <div>
                <form className="form" style={this.styles.form} onSubmit={this.handleFormSubmit}>
                    <input className="input" type="text" name="search" value={this.state.search} onChange={this.handleInputChange} placeholder="Search for a book" />
                    <button type="submit" className="button is-info">Search</button>
                </form>
                {this.state.results.map(book => (
                    <SearchedBook
                        key={book.id.toString()}
                        id={book.id}
                        title={book.volumeInfo.title}
                        authors={book.volumeInfo.authors}
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