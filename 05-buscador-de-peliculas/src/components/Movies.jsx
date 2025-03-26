/* eslint-disable react/prop-types */

import PropTypes from 'prop-types';

function ListOfMovies({ movies}) {
    return (
            <ul className="movies">
                {
                    movies.map((movie) => (
                        <li className="movie" key={movie.id}>
                            <img src={movie.image} alt={movie.title} />
                            <h3>{movie.title}</h3>
                            <p>{movie.year}</p>
                        </li>
                    ))
                }
            </ul>
    );

}

function MoviesNoResults() {
    return (
        <p>No results found</p>
    );
};



export function Movies({ movies }) {

    const hasMovies = movies?.length > 0;
    return (
        <>
            {
                hasMovies
                    ? <ListOfMovies movies={movies} />
                    : <MoviesNoResults />
            }
        </>
    );
}

