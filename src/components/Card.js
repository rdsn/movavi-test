import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Card(props) {
  return (
    <div className='card mt-1 mb-1'>
      <div className='card-body'>
        <h5 className='card-title'>{props.item[props.titlePropName]}</h5>
        <ul>
          {props.descriptionPropNames.map((name) => (
            <li key={name}>{name}: {props.item[name]}</li>
          ))}
        </ul>
        <Link to={props.path} className='btn btn-primary'>
          Подробнее
        </Link>
      </div>
    </div>
  );
}

Card.propTypes = {
  descriptionPropNames: PropTypes.array.isRequired,
  path: PropTypes.string.isRequired,
  item: PropTypes.object.isRequired,
  titlePropName: PropTypes.string.isRequired,
};

export default Card;
