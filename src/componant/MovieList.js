import React, { useState , useEffect } from 'react';
import MovieCard from './MovieCard';
import './Card.css';
import {Link} from 'react-router-dom'


const MovieList=(props)=>{
  
    const [targetMovie,setTargetMovie] = useState("")

    useEffect(() => {
        props.handleTargetMovie(targetMovie)
        
    }, [targetMovie])

    const handleTargetMovie = (movie) => {
setTargetMovie(movie)
console.log(movie)
    }

    let movies=props.movies.map((movie)=>{
        return <Link to="/details"><MovieCard posterUrl={movie.posterUrl} title={movie.title} description={movie.description} rate={movie.rate} link={movie.link} handleTargetMovie={handleTargetMovie} /></Link>
    })
    return(
        <div className='list-wrapper'> {movies}</div>
        
    )
}
export default MovieList;