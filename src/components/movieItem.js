import React, { Component } from 'react';


const MovieItem = props => {

    const {movie, removeMovie, addMovieToWillWatch} = props;
    const {id, title} = movie;

    return (
        <div className="card">
        <img src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path || movie.poster_path}`} alt="" className="card-img-top"/>
        <div className="card-body">
            <h6 className="card-title">{movie.title}</h6>
            <div className="d-flex justify-content-between align-items-center">
                <p className="mb-0">Rating {movie.vote_average}</p>
                <button type="button" className="btn btn-secondary" onClick={() => {
                    addMovieToWillWatch(movie)
                    }}>Will watch</button>
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
};

export default MovieItem;
