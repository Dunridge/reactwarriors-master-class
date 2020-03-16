import React from 'react';
import './App.css';
import {movieData} from './components/movieData'

let title = "Hello, World!"

//UI = function(state)
class App extends React.Component {
  
  constructor() {
    super();
    this.state = {
      movies: movieData
    }
  }

  render() {

    const listOfMovies = this.state.movies.map((movie) => {
      return <p>{movie.title}</p>
    });

    console.log(this);
    return (
      <div className="App">
        {/* <h1>{[<p>1</p>, <p>2</p>]}</h1> */}
        <h1>{listOfMovies}</h1>
        <h1>{this.state.movies[0].title}</h1>
      </div>
    );
  }
}

export default App;
