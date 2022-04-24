import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { MovieCard } from '../../components/moviecard/moviecard';

export const NowPlaying = () => {
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get('https://api.themoviedb.org/3/movie/now_playing?api_key=0b89ce6dda9fe5ee93d7dfc562a4e1e7&language=en-US&page=1')
        .then((res) => {
            setMovies(res.data.results);
        })
        .catch((error) => {
            setError(error);
        })
        console.log(movies);
    }, []);
    
    return (
       <div class="now-playing">
           <h1>Now Playing</h1>
           <div class="container-fluid">   
                <div class="row row-cols-1 row-cols-md-6">
                    {
                        movies.map((movie) => {
                            return (
                                <div>
                                    <MovieCard movie={movie} />
                                </div>
                            )
                        })
                    }
                </div>
            { error && <h1>error</h1> }
        </div>
    </div>
    )
}

