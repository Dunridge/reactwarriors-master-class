import React, { Component } from 'react';
import { Parallax } from 'react-scroll-parallax';
import ParallaxMoviesBG from '../img/parallax-movies-bg.jpg';

const ParallaxImage = () => {
    return (
        <Parallax className="parallax-image" y={[0, 0]} x={[-100, 50]} tagOuter="figure">
            <div className="parallax-contain">
                <img src={ParallaxMoviesBG} />
            </div>
        </Parallax>
    );
};

export default ParallaxImage;
