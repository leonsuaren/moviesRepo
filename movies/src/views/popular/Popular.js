import React, { useEffect, useState } from 'react';
import { Spinner } from '../../components/spinner/Spinner';

import axios from 'axios';

export const Popular = () => {
  const [loading, setLoading] = useState(false);
  const [popularMovies, setPopularMovies] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    axios.get(`${process.env.REACT_APP_API_BASE_URL}movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`).then((response) => {
      setTimeout(() => {
        setLoading(false);
      }, 3000);
      setPopularMovies(response.data.results);
    }).catch((error) => {
      setError(error);
      setLoading(false);
    });
  }, []);

  console.log(popularMovies);
  return (
    <div className="now-playing">
      <h1>Popular</h1>
      <div className="container-fluid">
        {
          loading ? <Spinner /> :
            <div class="row row-cols-1 row-cols-md-6">
              {
                popularMovies.map((movie, key) => {
                  return (
                    <div className="col mb-4" key={key}>
                      <div className="card">
                        <a href=""><img className="card-img-top" src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={`${movie.original_title}`} /></a>
                        <div className="card-body">
                          <h5 className="card-title">{`${movie.title}`}</h5>
                        </div>
                      </div>
                    </div>
                  )
                })
              }
            </div>
        }
        {
          error && <h1>Error</h1>
        }
      </div>
    </div>
  )
}