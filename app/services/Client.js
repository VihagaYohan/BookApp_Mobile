import axios from 'axios';
import {devEnvirontment} from './config/env'

const Client = axios.create({
  baseURL: devEnvirontment.BASE_URL,
  timeout: 1000,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

export default Client;
