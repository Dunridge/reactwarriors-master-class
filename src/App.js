import React, { useState, useEffect } from 'react'; //adding lifecycle hooks
import './App.css';
// import { movieData } from './components/movieData';
import MovieItem from './components/movieItem';
import 'bootstrap/dist/css/bootstrap.css';
import { movieData } from './components/movieData';
import MovieTabs from './components/MovieTabs';
//let title = 'Hello, World!';
import Pagination from './components/Pagination';

//UI = function(state, props)
class App extends React.Component {
    constructor() {
        super();
        this.state = {
            movies: [], //movieData // []
            moviesWillWatch: [],
            sort_by: 'revenue.desc',
            current_page: 1
        };
        console.log('constructor');
    }

    componentDidMount() {
        console.log('Did mount');
        this.getMovies();
        console.log('after fetch');
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('did update');
        console.log('prev', prevProps, prevState);
        console.log('this', this.props, this.state);
        if (prevState.sort_by !== this.state.sort_by) {
            console.log('call api');
            this.getMovies();
        }
    }

    getMovies = () => {
        fetch(
            `http://api.themoviedb.org/3/discover/movie?api_key=3f4ca4f3a9750da53450646ced312397&sort_by=${this.state.sort_by}`
        )
            .then(response => {
                //&sort_by=popularity.desc
                console.log('then');
                return response.json();
            })
            .then(data => {
                console.log('data: ', data);
                this.setState({ movies: data.results });
            });
    };

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

    addMovieToWillWatch = movie => {
        console.log(movie);
        // console.log("addMovieToWillWatchFunc called")
        const movieList = [...this.state.moviesWillWatch, movie];
        this.setState({ moviesWillWatch: movieList });
    };

    removeMovieFromWillWatch = movie => {
        const newMoviesWillWatch = this.state.moviesWillWatch.filter(item => {
            return item.id !== movie.id;
        });

        this.setState({
            moviesWillWatch: newMoviesWillWatch
        });
    };

    updateSortBy = value => {
        this.setState({
            sort_by: value
        });
    };

    setCurrentPage = pageNumber => {
        this.setState({
            current_page: pageNumber
        });
        console.log(this.state);
    };

    // Change page
    paginate = pageNumber => this.setCurrentPage(pageNumber);

    render() {
        // console.log(this);
        console.log('render', this.state.sort_by);
        return (
            <div className="container">
                <div className="row">
                    <div className="col-9">
                        <div className="row mb-4">
                            <div className="col-12">
                                <MovieTabs
                                    sort_by={this.state.sort_by}
                                    updateSortBy={this.updateSortBy}
                                />

                                <Pagination
                                    postsPerPage={6}
                                    totalPosts={this.state.movies.length}
                                    paginate={this.paginate}
                                />
                            </div>
                        </div>
                        <div className="row">
                            {this.state.movies
                                .filter(movie => {
                                    if (this.state.current_page === 1) {
                                        if (
                                            this.state.movies
                                                .slice(0, 5)
                                                .includes(movie)
                                        ) {
                                            return true;
                                        }
                                    } else if (this.state.current_page === 2) {
                                        if (
                                            this.state.movies
                                                .slice(6, 11)
                                                .includes(movie)
                                        ) {
                                            return true;
                                        }
                                    } else if (this.state.current_page === 3) {
                                        if (
                                            this.state.movies
                                                .slice(
                                                    12,
                                                    this.state.movies.length
                                                )
                                                .includes(movie)
                                        ) {
                                            return true;
                                        }
                                    }
                                })
                                .map(movie => {
                                    //TODO: ouput the number of pages depending on the number of current page

                                    return (
                                        <div
                                            className="col-6 mb-4"
                                            key={movie.id}
                                        >
                                            <MovieItem
                                                movie={movie}
                                                // movies={this.state.movies}
                                                removeMovie={this.removeMovie}
                                                addMovieToWillWatch={
                                                    this.addMovieToWillWatch
                                                }
                                                removeMovieFromWillWatch={
                                                    this
                                                        .removeMovieFromWillWatch
                                                }
                                            />
                                        </div>
                                    );
                                })}
                        </div>
                    </div>
                    <div className="col-3">
                        <p>Will watch {this.state.moviesWillWatch.length}</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
