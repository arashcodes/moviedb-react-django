import React from 'react';


const MovieListEntry = (props) => {
  const imageBaseUrl = 'http://image.tmdb.org/t/p/w500';
  const rest = props.movie.backdrop_path;
  return (
    <img src ={imageBaseUrl + rest} alt='movie poster' />
  )
}

export default MovieListEntry;