import React from 'react';
import PropTypes from 'prop-types';
import { Link, useParams } from 'react-router-dom';

import { getEntityPathFromUrl } from '../utils';
import { COLLECTIONS } from '../config';
import { useSwapi } from '../hooks/useSwapi';

function Entity(props) {
  const { id } = useParams();

  // todo handle error and loading
  const [item] = useSwapi(
    props.collectionName,
    `/${props.collectionName}/${id}/`,
    {}
  );

  return (
    <ul className='list-unstyled'>
      {Object.entries(item).map(([propName, value]) => {
        if (typeof value === 'string' || typeof value === 'number') {
          return (
            <li key={propName}>
              <strong>{propName}</strong>: {value}
            </li>
          );
        } else if (propName in COLLECTIONS) {
          return (
            <li key={propName}>
              <strong>{propName}</strong>:
              <ul>
                {value.map((url) => (
                  <li key={url}>
                    <Link to={getEntityPathFromUrl(url)}>
                      {getEntityPathFromUrl(url)}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
          );
        } else {
          return null;
        }
      })}
    </ul>
  );
}

Entity.propTypes = {
  collectionName: PropTypes.string.isRequired,
};

export default Entity;
