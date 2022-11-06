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

Client.interceptors.response.use(
  response => response,
  error => {
    console.log(`Error occured`)
    console.log(error)
    return error.response
  }
)

export default Client;
