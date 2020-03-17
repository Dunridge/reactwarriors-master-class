import React from 'react';
import './App.css';
import { movieData } from './components/movieData';
import MovieItem from './components/movieItem';

//let title = 'Hello, World!';

//UI = function(state)
class App extends React.Component {
    constructor() {
        super();
        this.state = {
            movies: movieData
        };
    }

    //callback
    handleDelete = movie => {
        const newMoviesList = this.state.movies.filter(item => {
            return item.id !== movie.id;
        });

        console.log(newMoviesList);

        this.setState({ movies: newMoviesList });
        // console.log(movie.id)
    };

    removeMovie = movie => {
        const newMoviesList = this.state.movies.filter(item => {
            return item.id !== movie.id;
        });

        console.log(newMoviesList);

        this.setState({ movies: newMoviesList });
    };

    render() {
        const listOfMovies = this.state.movies.map(movie => {
            return (
                <MovieItem
                    key={movie.id}
                    movie={movie}
                    movies={this.state.movies}
                    removeMovie={this.removeMovie}
                />
            );
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
