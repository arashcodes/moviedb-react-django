import React from 'react';
import axios from 'axios';
import MovieList from './MovieList';
import AddMovies from './AddMovies';
import pv from '../../../pv.js';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      trendingMovies: [],
      myMovies: [],
    }

    this.getTrendingMovies = this.getTrendingMovies.bind(this);
    this.addMovies = this.addMovies.bind(this);
  }

  componentDidMount() {
    this.getTrendingMovies();
  }

  addMovies(movie) {
    const inputStr = movie.replace(/ /gi, '%20');
    axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${pv.api_key}&language=en-US&query=${inputStr}&page=1&include_adult=false`)
      .then(res => res.data.results[0].id)
      .then(id => axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${pv.api_key}&language=en-US`)
      .then(res => {
        const currMovies = this.state.myMovies.slice();
        this.setState({
          myMovies: currMovies,
        })
      })
      )
      .catch(err => console.log(err));
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
        <h1>Movie List</h1>
        <AddMovies addMovies={this.addMovies} />
        <MovieList movies={this.state.trendingMovies} />
      </div>
    )
  }
}

export default App;