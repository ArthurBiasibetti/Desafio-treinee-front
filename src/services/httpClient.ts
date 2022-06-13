import axios from 'axios';
import getTokenStorage from '../utils/getTokenStorage';

const defaultHeaders = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
  'Access-Control-Allow-Origin': '*',
};

const axiosConfig = axios.create({
  baseURL: `${process.env.REACT_APP_API_URL}`,
  timeout: 30000,
  headers: defaultHeaders,
});

axiosConfig.defaults.headers.common.Authorization = getTokenStorage();

class HttpClient {
  static api = axiosConfig;
}

export default HttpClient;
