import React, { useState } from 'react';

import MovieDetailsCard from './MovieDetailsCard';
import ArrowClose from './ArrowClose';
import ArrowOpen from './ArrowOpen';
import './Components.css'

const MovieItem = ({movie}) => {
const [selectedMovie, setSelectedMovie] = useState(null);
const displayCloseIcon = selectedMovie && selectedMovie.id ? selectedMovie.id === movie.id : false;

return (
    <div className="movieItemWrapper">
        <div className="movieItem">
            <div>
                {movie.title}
            </div>
            <div>
                {displayCloseIcon ? 
                <ArrowClose onClick={() => setSelectedMovie(null)}/> :
                <ArrowOpen onClick={() => setSelectedMovie(movie)}/>}
            </div>
        </div>
        { displayCloseIcon ? <MovieDetailsCard movie={movie} /> : null }
    </div>
)
}

export default MovieItem;