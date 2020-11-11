import React from 'react';
import axios from 'axios';
import MovieList from './MovieList';
import AddMovies from './AddMovies';
import pv from '../../../pv.js';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      renderedMovies: [],
    }

    this.getTrendingMovies = this.getTrendingMovies.bind(this);
    this.addMovies = this.addMovies.bind(this);
    this.goToHome = this.goToHome.bind(this);
    this.goToMyMovies = this.goToMyMovies.bind(this);
    this.getMyMovies = this.getMyMovies.bind(this);
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
        const movieObj = {
          title: res.data.title,
          movie_id: res.data.id,
          backdrop_path: res.data.backdrop_path,
        }

        axios.post(`http://127.0.0.1:8000/add/`, movieObj)
        .then(() => alert('Movie added!'))
        .catch(err => console.log(err));
      }))
      .catch(err => console.log(err));
  }

  getTrendingMovies() {
    axios.get(`https://api.themoviedb.org/3/trending/all/day?api_key=${pv.api_key}`)
      .then(res => this.setState({
        renderedMovies: res.data.results,
      }))
      .catch(err => console.log(err));
  }

  getMyMovies() {
    axios.get(`http://127.0.0.1:8000/list/`)
      .then(res => {
        this.setState({
          renderedMovies: res.data,
        })
      })
      .catch(err => console.log(err));
  }

  goToHome() {
    this.getTrendingMovies();
  }

  goToMyMovies() {
    this.getMyMovies();
  }

  render() {
    return (
      <div>
        <h1>Movie List</h1>
        <button onClick={this.goToHome} >Home</button>
        <button onClick={this.goToMyMovies} >My List</button>
        <br />
        <br />
        <AddMovies addMovies={this.addMovies} />
        <MovieList movies={this.state.renderedMovies} />
      </div>
    )
  }
}

export default App;