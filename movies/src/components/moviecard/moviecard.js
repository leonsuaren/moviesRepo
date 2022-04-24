import React from 'react';

export const MovieCard = ({movie}) => {
    console.log(movie);
    return (
        <div className="col mb-4">
            <div className="card">
                <a href=""><img className="card-img-top" src={`https://image.tmdb.org/t/p/w500/S${movie.poster_path}`} alt='now playing movie' /></a>
                <div className="card-body">
                    <h5 className="card-title">{`${movie.title}`}</h5>
                </div>
            </div>
        </div>
    )
}