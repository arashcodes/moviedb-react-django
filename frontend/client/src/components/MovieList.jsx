import React from 'react';
import MovieListEntry from './MovieListEntry';

const MovieList = (props) => {
  return (
    <ul >
      {props.movies.map((movie, idx) => {
        return <MovieListEntry key={idx} movie={movie} />
      })}
    </ul>
  )
}

export default MovieList;