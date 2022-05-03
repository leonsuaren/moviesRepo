import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { MovieCard } from '../../components/moviecard/moviecard';

import { Spinner } from '../../components/spinner/Spinner';

export const TopRated = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios.get(`${process.env.REACT_APP_API_BASE_URL}movie/top_rated?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`)
      .then((res) => {
        setTimeout(() => {
          setLoading(false);
        }, 3000)
        setMovies(res.data.results);
      })
      .catch((error) => {
        setError(error);
        setLoading(false)
      })
  }, []);

  return (
    <div className="movie-gallery">
      <h1>Top Rated</h1>
      <div className="container-fluid">
        {
          loading ? <Spinner /> :
          <div className="row row-cols-1 row-cols-md-6">
            {
              movies.map((movie, index) => {
                return (
                    <MovieCard movie={movie} key={index} />
                )
              })
            }
          </div>
        }
        {error && <h1>error</h1>}
      </div>
    </div>
  )
}
