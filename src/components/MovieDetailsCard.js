import React, {useState, useEffect} from 'react';
import { data } from '../assets/data';
import MovieDetailsTable from './MovieDetailsTable';
import './Components.css'

const MovieDetailsCard = ({movie}) => {
    const planets =  data.data.planets;
    const selectPlanet = planet => {
        const films = planet.filmConnection.films.filter((film) => film.id === movie.id)
        if(films.length > 0) {
            return true
        } else return false
    }
    const moviePlanets = planets.filter((planet) => selectPlanet(planet))

    //let headings = Object.keys(planets[0]).filter(item => item !== "filmConnection" && item !== 'id');
    const headings = [
        "Planet Name",
        "Rotation priod",
        "Orbital period",
        "Diameter",
        "Climate",
        "Surface water",
        "Population"
    ]

    const rows = moviePlanets.map((movie => Object.values(movie).filter((item, index ) => index !== 0 && index !== 8)));

return (
    <div className="movieDetailsCard">
        <MovieDetailsTable headings={headings} rows={rows} />
    </div>
)
}

export default MovieDetailsCard;