import React from 'react';

const imageBaseUrl = 'http://image.tmdb.org/t/p/w300';

class MovieListEntry extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      
    }
  }

  render() {
    const rest = this.props.movie.backdrop_path;
    return (
      <div className="gallery">
        <img src={imageBaseUrl + rest} />
      </div>
    )
  }
}

export default MovieListEntry;