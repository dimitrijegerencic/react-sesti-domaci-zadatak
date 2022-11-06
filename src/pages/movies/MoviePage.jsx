import React from "react";
import {listOfMovies} from "../../constants/constants";
import classes from './MoviePage.module.scss';
import MovieCard from "../../components/movieCard/MovieCard";

const MoviePage = () => {
    return <div>
        <div className={classes['container']}>
            <div className={classes['title']}>
                <h1>Movies</h1>
            </div>
            <div className={classes['movies']}>
                {listOfMovies.map((movie)=>{
                    return (
                        <MovieCard
                            key = {movie.id}
                            id = {movie.id}
                            title={movie.name}
                            genre={movie.genre}
                            year={movie.year}
                            grade={movie.grade}
                            image={movie.image}
                            length={movie.length}
                            actors={movie.actors}
                        />
                    )
                })}
            </div>
        </div>
    </div>
}

export default MoviePage;