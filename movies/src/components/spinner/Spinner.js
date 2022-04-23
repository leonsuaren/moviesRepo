import React from 'react';
import './styles.css';

export const Spinner = () => {
  return (
    <div class="spinner-border text-primary spinner-position" role="status" data-test='spinner-component'>
      <span class="visually-hidden">Loading...</span>
    </div>
  )
}