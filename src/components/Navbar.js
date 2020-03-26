import React, { Component } from 'react';

const Navbar = (props) => {
    return (
        <nav className="nav-wrapper solid white">
            <div className="container">
                <a className="brand-logo black-text">MoviePicker</a>
                <div className="right">
                    <p className="black-text">Will watch: {props.moviesWillWatch}</p>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
