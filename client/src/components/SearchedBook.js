import React from "react";

function ResultList(props) {

  const bookDetails = {
    title: props.title,
    authors: props.authors,
    description: props.description,
    image: props.image,
    link: props.link
  };

  return (
    <div className="box">
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
        </div>
        <nav className="level is-mobile">
          <div className="level-left">
            <a href={props.link} target="_blank" rel="noopener noreferrer">
              <span className="icon has-text-info">
              <i className="fas fa-info-circle"></i>
              </span>
            </a>
            <a className="level-item" aria-label="like" onClick={() => props.saveBook(bookDetails)}>
              <span className="icon is-small">
              <i className="fas fa-heart" aria-hidden="true"></i>
              </span>
            </a>
          </div>
        </nav>
      </article>
    </div>
  )

}

export default ResultList;