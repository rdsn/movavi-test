import React from 'react';
import { Link } from 'react-router-dom';
import { COLLECTIONS } from '../config';

function Main() {
  return (
    <ul className='list-group list-group-flush'>
      {Object.entries(COLLECTIONS).map(([id, title]) => (
        <li key={id} className='list-group-item'>
          <Link to={`/${id}`}>{title}</Link>
        </li>
      ))}
    </ul>
  );
}

export default Main;
