import React from 'react';

function Movie(props) {
  const {
    Title: title,
    Year: year,
    imdbID: id,
    Type: type,
    Poster: poster
  } = props;

  return <div id={id} className="movie card">
          <div className="row">
    <div className="col s12 m7">
      <div className="card">
        <div className="card-image">
          {
            poster === "N/A" ?
            <img src={'https://placehold.co/300x150'} /> : <img src={poster} /> 
          }
          <span className="card-title">{title}</span>
        </div>
        <div className="card-content">
          <p>{year} <span className="right">{type}</span></p>
        </div>
        <div className="card-action">
          <a href="#">Learn more</a>
        </div>
      </div>
    </div>
  </div>
    </div>;
}

export { Movie };