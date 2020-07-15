import axios from 'axios';

import { API_ENDPOINT } from './config';

export default axios.create({
  baseURL: API_ENDPOINT,
  timeout: 500,
});
