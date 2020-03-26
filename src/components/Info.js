import React from 'react';
import Footer from './Footer';
import blockbusterMovies from '../img/blockbuster-movies-1.jpg';
import classicMovies from '../img/classic-movies.jpg';
import dramaMovies from '../img/drama-movies.jpg';
import parallaxImage from '../img/parallax-movies-bg.jpg';
import ParallaxImage from '../components/ParallaxImage';

const Info = () => {
    return (
        <div className="container">
            <section className="container section" id="photos">
                <h4>About us</h4>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Vitae ratione asperiores, ab aliquid, sunt, obcaecati
                    eveniet placeat quidem reprehenderit laudantium modi et
                    delectus corrupti vel fuga ut at! Minus, unde?
                </p>
            </section>

            <section class="container section scrollspy" id="photos">
                <div class="row">
                    <div class="col s12 l4">
                        <img
                            src={blockbusterMovies}
                            class="responsive-img materialboxed"
                        />
                    </div>
                    <div class="col s12 l6 offset-l1">
                        <h2 class="indigo-text text-darken-4">Blockbusters</h2>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Nisi illum quis, cum corporis expedita ut
                            magni magnam animi, cupiditate tempore omnis
                            tenetur, exercitationem praesentium in dolorem
                            veritatis. Mollitia, ad quam.
                        </p>
                    </div>
                </div>
                <div class="row">
                    <div class="col s12 l4 push-l7 offset-l1">
                        <img
                            src={classicMovies}
                            class="responsive-img materialboxed"
                        />
                    </div>
                    <div class="col s12 l6  pull-l5 right-align offset-l1">
                        <h2 class="indigo-text text-darken-4">Classics</h2>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Nisi illum quis, cum corporis expedita ut
                            magni magnam animi, cupiditate tempore omnis
                            tenetur, exercitationem praesentium in dolorem
                            veritatis. Mollitia, ad quam.
                        </p>
                    </div>
                </div>
                <div class="row">
                    <div class="col s12 l4">
                        <img
                            src={dramaMovies}
                            class="responsive-img materialboxed"
                        />
                    </div>
                    <div class="col s12 l6 offset-l1">
                        <h2 class="indigo-text text-darken-4">Drama</h2>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Nisi illum quis, cum corporis expedita ut
                            magni magnam animi, cupiditate tempore omnis
                            tenetur, exercitationem praesentium in dolorem
                            veritatis. Mollitia, ad quam.
                        </p>
                    </div>
                </div>
            </section>

            {/* parallax */}
            <ParallaxImage/>
            

            

        </div>
    );
};

export default Info;
