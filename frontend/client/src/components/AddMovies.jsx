import React from 'react';
import ReactDOM from 'react-dom';

class AddMovies extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      value: event.target.value,
    })
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.addMovies(this.state.value);
    this.setState({
      value: '',
    })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} >
        <label>
          <input type="text" value={this.state.value} onChange={this.handleChange} placeholder="Add movie title here" />
        </label>
        <input type="submit" value="Add" style={{background: 'green', color: 'white'}} />
      </form>
    )
  }
}

export default AddMovies;