import React, { Component } from 'react';


const MovieItem = props => {
    return (
        <div key={props.movie.id}>
            <p>{props.movie.title}</p>
            <button
                onClick={() => {
                    props.removeMovie(props.movie);
                }}
            >
                Delete movie
            </button>
        </div>
    );
};

export default MovieItem;
