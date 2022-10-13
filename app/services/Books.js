import {Endpoints} from './index';

// constants
import {utils, constants} from '../utils';

const {printLog} = utils;
const {http} = constants;

// get all trending books
export const getTrendingBooks = async () => {
  try {
    let requestOptions = {
      method: http.GET,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'x-auth-token':
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzMzA0YzU2NGI2ZWQ2NGE1MjQyMWY0OCIsInJvbGUiOiJ1c2VyIiwiaWF0IjoxNjY0MTg0Njc3LCJleHAiOjE2NjY3NzY2Nzd9.d1gZjQFWPx77kgvEbDTO2_X8v3bhAvkgFwCW4J2SYS0',
      },
    };
    console.log(Endpoints.trendingBooks);
    let result = await fetch(Endpoints.trendingBooks, requestOptions);
    result = await result.json();
    return result;
  } catch (e) {
    printLog(e);
  }
};

// get all books grouped by category
export const booksForCategory = async () => {
  try {
    let requestOptions = {
      method: http.GET,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'x-auth-token':
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzMzA0YzU2NGI2ZWQ2NGE1MjQyMWY0OCIsInJvbGUiOiJ1c2VyIiwiaWF0IjoxNjY0MTg0Njc3LCJleHAiOjE2NjY3NzY2Nzd9.d1gZjQFWPx77kgvEbDTO2_X8v3bhAvkgFwCW4J2SYS0',
      },
    };

    let result = await fetch(Endpoints.booksForCategory,requestOptions);
    result = await result.json();
    return result;
  } catch (e) {
    printLog(e);
  }
};

export default {
    getTrendingBooks,
  booksForCategory,
};
