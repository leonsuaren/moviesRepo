import React from 'react';

export const NowPlaying = () => {
  return(
        <div
      id="carousel"
      class="carousel slide"
      data-bs-ride="carousel"
    >
        <div class="hideLeft">
          <img
            src="https://i1.sndcdn.com/artworks-000165384395-rhrjdn-t500x500.jpg"
            alt="..."
          />
        <div class="prevLeftSecond">
          <img
            src="https://i1.sndcdn.com/artworks-000185743981-tuesoj-t500x500.jpg"
            alt="..."
          />
        </div>
        <div class="prev">
          <img
            src="https://i1.sndcdn.com/artworks-000185743981-tuesoj-t500x500.jpg"
            alt="..."
          />
        </div>
        <div class="selected">
          <img
            src="https://i1.sndcdn.com/artworks-000062423439-lf7ll2-t500x500.jpg"
          />
        <div class="next">
          <img
            src="https://i1.sndcdn.com/artworks-000028787381-1vad7y-t500x500.jpg"
          />
        </div>
        <div class="nextRightSecond">
          <img
            src="https://i1.sndcdn.com/artworks-000108468163-dp0b6y-t500x500.jpg"
          />
        </div>
        <div class="hideRight">
          <img
            src="https://i1.sndcdn.com/artworks-000064920701-xrez5z-t500x500.jpg"
          />
        </div>
      </div>

      <div class="buttons">
        <button id="prev">Prev</button>
        <button id="next">Next</button>
      </div>
    </div>
    </div>
  );
};