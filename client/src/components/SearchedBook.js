import React from "react";

function SearchedBook(props) {

  const styles = {
    card: {
      width: "90%",
      margin: "10px"
    },
    secondButton: {
      marginLeft: "10px"
    }
  };

  const bookDetails = {
    id: props.id,
    title: props.title,
    authors: props.authors,
    description: props.description,
    image: props.image,
    link: props.link
  };

  return (
    <div className="box" style={styles.card}>
      <article className="media">
        <div className="media-left">
          <figure className="image is-128x168">
          <img src={props.image} alt="Book Cover" />
          </figure>
        </div>
        <div className="media-content">
          <div className="content">
          <p><strong>{props.title}</strong><small> by {props.authors.join(', ')}</small><br/>{props.description}</p>
          </div>
          <div>
          <a className="button is-info is-outlined" href={props.link} target="_blank" rel="noopener noreferrer">Open on Google Books</a>
          <a className="button is-success is-outlined" style={styles.secondButton} href="/saved" onClick={() => props.saveBook(bookDetails)}>Save this book</a>
        </div>
        </div>
      </article>
    </div>
  )

}

export default SearchedBook;