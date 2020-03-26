import React, { Component } from 'react';

class MovieItem extends Component {
    constructor() {
        super();
        this.state = {
            willWatch: false
        };
    }

    // componentWillUnmount() {
    //     console.log('component will unmount', this.props.movie.title);
    // }

    render() {
        const { movie, removeMovie, addMovieToWillWatch, removeMovieFromWillWatch } = this.props;

        return (
            <div className="card">
                <img
                    src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path ||
                        movie.poster_path}`}
                    alt=""
                    className="card-img-top responsive-img"
                />
                <div className="card-body">
                    <h6 className="card-title">{movie.title}</h6>
                    <div className="d-flex justify-content-between align-items-center">
                        <p className="mb-0">Rating {movie.vote_average}</p>
                        {this.state.willWatch ? (
                            <button type="button" className="btn btn-success" onClick={() => {
                                this.setState({
                                    willWatch: false
                                })
                                removeMovieFromWillWatch(movie);
                            }}>
                                Remove
                            </button>
                        ) : (
                            <button
                                type="button"
                                className="btn btn-secondary"
                                onClick={() => {
                                    this.setState({
                                        willWatch: true
                                    });
                                    addMovieToWillWatch(movie);
                                }}
                            >
                                Add
                            </button>
                        )}
                    </div>
                    <button
                        onClick={() => {
                            removeMovie(movie);
                        }}
                    >
                        Delete movie
                    </button>
                </div>
            </div>
        );
    }
}

export default MovieItem;
