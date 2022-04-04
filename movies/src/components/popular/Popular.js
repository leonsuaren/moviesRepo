import React from 'react';

export const Popular = () => {
    return(
        <div class="container">
        <div class="card-deck mb-3 text-center">
          <div class="card mb-4 box-shadow">
           <nav class="navbar navbar-light bg-light">
        <div class="container-fluid">
          <h4>Popular</h4>
          <form class="d-flex">
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
            <button class="btn btn-outline-success" type="submit">Search</button> 
          </form>
          <nav aria-label="Page navigation example">
  <ul class="pagination">
    <li class="page-item">
      <a class="page-link" href="#" aria-label="Previous">
        <span aria-hidden="true">&laquo;</span>
      </a>
    </li>
    <li class="page-item"><a class="page-link" href="#">1</a></li>
    <li class="page-item"><a class="page-link" href="#">2</a></li>
    <li class="page-item"><a class="page-link" href="#">3</a></li>
    <li class="page-item">
      <a class="page-link" href="#" aria-label="Next">
        <span aria-hidden="true">&raquo;</span>
      </a>
    </li>
  </ul>
</nav>
        </div>
      </nav>
      </div>
      </div>
      </div>
    );
  };