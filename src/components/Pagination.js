import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Link } from 'react-router-dom';

function Pagination(props) {
  const buildPageUrl = (pageNumber) =>
    `/${props.collectionName}/?page=` + pageNumber;

  return (
    <nav aria-label='Постраничная навигация'>
      <ul className='pagination'>
        <li
          className={classnames('page-item', {
            disabled: props.currentPage <= 1,
          })}
        >
          <Link
            className='page-link'
            to={buildPageUrl(props.currentPage - 1)}
            aria-label='Предыдущая'
          >
            <span aria-hidden='true'>&laquo;</span>
          </Link>
        </li>
        {[...Array(props.pagesCount)].map((item, index) => {
          return (
            <li
              key={index}
              className={classnames('page-item', {
                active: index + 1 === props.currentPage,
              })}
            >
              <Link className='page-link' to={buildPageUrl(index + 1)}>
                {index + 1}
              </Link>
            </li>
          );
        })}
        <li
          className={classnames('page-item', {
            disabled: props.currentPage >= props.pagesCount,
          })}
        >
          <Link
            className='page-link'
            to={buildPageUrl(props.currentPage + 1)}
            aria-label='Следующая'
          >
            <span aria-hidden='true'>&raquo;</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

Pagination.propTypes = {
  currentPage: PropTypes.number.isRequired,
  pagesCount: PropTypes.number.isRequired,
  collectionName: PropTypes.string.isRequired,
};

export default Pagination;
