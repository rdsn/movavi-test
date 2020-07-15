import React, { useCallback, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import Pagination from './Pagination';
import { useLocation, useHistory } from 'react-router-dom';
import { useSwapi } from '../hooks/useSwapi';

function EntityList(props) {
  const buildUrl = useCallback((page, search = '') => {
    const params = new URLSearchParams({ page });
    if (search) {
      params.append('search', search);
    }

    return `/${collectionName}/?${params.toString()}`;
  });

  const handleChange = (event) => {
    setSearchValue(event.target.value);

    if (currentPage === 1) {
      setUrl(buildUrl(currentPage, event.target.value));
    } else {
      history.push(`/${collectionName}/`);
    }
  };

  const defaultPageNumber = 1;
  const collectionName = props.collectionName;
  // количество элементов на странице узнал экспериментально. получать это не из API - решение хрупкое
  // можно использовать previous и next из API, но тогда останутся только кнопки вперед/назад
  const pageSize = 10;

  const query = new URLSearchParams(useLocation().search);
  const currentPage = Number(query.get('page') || defaultPageNumber);
  const [searchValue, setSearchValue] = useState('');
  const [
    { results: items = [], count = 1 },
    isLoading,
    isError,
    setUrl,
  ] = useSwapi(collectionName, buildUrl(currentPage, searchValue), {});
  const pagesCount = Math.ceil(count / pageSize);

  const history = useHistory();

  useEffect(() => {
    setUrl(buildUrl(currentPage, searchValue));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage]);

  return isError ? (
    <div>Ошибка загрузки. Попробуйте обновить страницу.</div>
  ) : (
    <div className='items-container'>
      <input
        placeholder='Введите название'
        className='form-control'
        type='text'
        value={searchValue}
        onChange={handleChange}
      />

      {items.length ? (
        items.map((item) => (
          <React.Fragment key={props.keyExtractor(item)}>
            {props.renderItem(item)}
          </React.Fragment>
        ))
      ) : isLoading ? (
        <h3>Данные загружаются.</h3>
      ) : (
        <h3>Нет результатов.</h3>
      )}

      {pagesCount === 1 ? null : (
        <Pagination
          collectionName={collectionName}
          currentPage={currentPage}
          pagesCount={pagesCount}
        />
      )}
    </div>
  );
}

EntityList.propTypes = {
  keyExtractor: PropTypes.func.isRequired,
  renderItem: PropTypes.func.isRequired,
  collectionName: PropTypes.string.isRequired,
};

export default EntityList;
