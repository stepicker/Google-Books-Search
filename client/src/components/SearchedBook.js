import React from "react";

function ResultList(props) {

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
          <p><strong>{props.title}</strong><small>by {props.authors}</small><br/>{props.description}</p>
          </div>
        </div>
        <nav className="level is-mobile">
          <div className="level-left">
            <a href={props.link} target="_blank" rel="noopener noreferrer">
              <span class="icon has-text-info">
              <i class="fas fa-info-circle"></i>
              </span>
            </a>
            <a className="level-item" aria-label="like" onClick={() => this.props.saveBook(this.props.id)}>
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