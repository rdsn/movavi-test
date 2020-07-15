import { useState, useEffect } from 'react';
import api from '../api';

export const useSwapi = (collectionName, initialUrl, initialData) => {
  const [url, setUrl] = useState(initialUrl);
  const [data, setData] = useState(initialData);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsError(false);
      setIsLoading(true);

      try {
        const response = await api.get(url);

        // const response = {
        //   data: {
        //     results: [{name: '1', "url": "http://swapi.dev/api/people/1/"}, {name: '2', "url": "http://swapi.dev/api/people/2/"}],
        //     count: 2
        //   }
        // };

        setData(response.data);
      } catch (e) {
        setIsError(true);
      }

      setIsLoading(false);
    };

    fetchData();
  }, [collectionName, url]);

  return [data, isLoading, isError, setUrl];
};
