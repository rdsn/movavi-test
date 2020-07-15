import { API_ENDPOINT } from './config';

export const getEntityPathFromUrl = (url) => {
  return url.replace(API_ENDPOINT, '');
};
