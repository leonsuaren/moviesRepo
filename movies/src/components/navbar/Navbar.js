import React from 'react';
import { Link } from 'react-router-dom';

export const Navbar= () =>{
 return (
  <nav class="navbar navbar-expand-lg navbar-light bg-light" data-test="navbar-component">
  <div class="container-fluid">
    <Link to='/' class="navbar-brand">Movies Demo</Link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li><Link to='actors' className='nav-link' data-test='actors-link-component'>Actors</Link></li>
          <li><Link to='movie-favorites' className='nav-link' data-test='favorites-component'>Favorites</Link></li>
          <li class="nav-item"><Link to='now-playing' className='nav-link active' data-test='now-playing-component'>Now Playing</Link></li>
      </ul>
   </div>
  </div>
</nav>

 )
}
