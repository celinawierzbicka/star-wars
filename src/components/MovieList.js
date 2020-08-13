import React from 'react';

import { data } from '../assets/data';
import MovieItem from './MovieItem';
import './Components.css'

const MovieList = () => {
    const movies = data.data.films;
    const renderMovies = () => {
        return movies.map(movie => <MovieItem key={movie.id} movie={movie} />)
    }
    return <div className="movieList">{renderMovies()}</div>
}

export default MovieList;