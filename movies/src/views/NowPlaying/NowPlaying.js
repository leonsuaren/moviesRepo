import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { Spinner } from '../../components/spinner/Spinner';

export const NowPlaying = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios.get(`${process.env.REACT_APP_API_BASE_URL}movie/now_playing?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`)
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
    <div class="now-playing">
      <h1>Now Playing</h1>
      <div class="container-fluid">
        {
          loading ? <Spinner /> :
          <div class="row row-cols-1 row-cols-md-6">
            {
              movies.map((movie) => {
                return (
                  <div class="col mb-4">
                    <div class="card">
                      <a href=""><img class="card-img-top" src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt='now playing movie' /></a>
                      <div class="card-body">
                        <h5 class="card-title">{`${movie.title}`}</h5>
                      </div>
                    </div>
                  </div>
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
