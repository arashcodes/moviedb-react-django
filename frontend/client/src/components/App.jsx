import React from 'react';
import axios from 'axios';
import MovieList from './MovieList';
import pv from '../../../pv.js';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      trendingMovies: [],
    }

    this.getTrendingMovies = this.getTrendingMovies.bind(this);
  }

  componentDidMount() {
    this.getTrendingMovies();
  }

  getTrendingMovies() {
    axios.get(`https://api.themoviedb.org/3/trending/all/day?api_key=${pv.api_key}`)
      .then(res => this.setState({
        trendingMovies: res.data.results,
      }))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div>
        <MovieList movies={this.state.trendingMovies} />
      </div>
    )
  }
}

export default App;