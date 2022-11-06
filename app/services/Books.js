import {Endpoints, Client} from './index';

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
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzMzA0YzU2NGI2ZWQ2NGE1MjQyMWY0OCIsInJvbGUiOiJ1c2VyIiwiaWF0IjoxNjY3NzA0MzAwLCJleHAiOjE2NzAyOTYzMDB9.c3MKfh2WCtNOnTlY92miFcx8vk9XCfYh6Xc009qBDNc',
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
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzMzA0YzU2NGI2ZWQ2NGE1MjQyMWY0OCIsInJvbGUiOiJ1c2VyIiwiaWF0IjoxNjY3NzA0MzAwLCJleHAiOjE2NzAyOTYzMDB9.c3MKfh2WCtNOnTlY92miFcx8vk9XCfYh6Xc009qBDNc',
      },
    };

    let result = await fetch(Endpoints.booksForCategory, requestOptions);
    result = await result.json();
    return result;
  } catch (e) {
    printLog(e);
  }
};

// get book details
export const getBookDetails = async id => {
  try {
    let requestOptions = {
      method: http.GET,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'x-auth-token':
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzMzA0YzU2NGI2ZWQ2NGE1MjQyMWY0OCIsInJvbGUiOiJ1c2VyIiwiaWF0IjoxNjY3NzA0MzAwLCJleHAiOjE2NzAyOTYzMDB9.c3MKfh2WCtNOnTlY92miFcx8vk9XCfYh6Xc009qBDNc',
      },
    };

    //let result = await fetch(`${Endpoints.bookDetails}/${id}`, requestOptions);
    let result = await Client.get(
      `${Endpoints.bookDetails}/${id}`,
      requestOptions,
    );
    // result = await result.json();
    return result;
  } catch (e) {
    printLog(e);
  }
};

// get content for book
export const getBookContents = async id => {
  try {
    let requestOptions = {
      method: http.GET,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'x-auth-token':
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzMzA0YzU2NGI2ZWQ2NGE1MjQyMWY0OCIsInJvbGUiOiJ1c2VyIiwiaWF0IjoxNjY3NzA0MzAwLCJleHAiOjE2NzAyOTYzMDB9.c3MKfh2WCtNOnTlY92miFcx8vk9XCfYh6Xc009qBDNc',
      },
    };

    let result  = await Client.get(`${Endpoints.getAllBookContents}/${id}`,requestOptions);
    return result;
  } catch (e) {
    printLog(e);
  }
};

// get reviews for book
export const getBookReviews = async id => {
  try {
    let requestOptions = {
      method: http.GET,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'x-auth-token':
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzMzA0YzU2NGI2ZWQ2NGE1MjQyMWY0OCIsInJvbGUiOiJ1c2VyIiwiaWF0IjoxNjY3NzA0MzAwLCJleHAiOjE2NzAyOTYzMDB9.c3MKfh2WCtNOnTlY92miFcx8vk9XCfYh6Xc009qBDNc',
      },
    };

    let result = await Client.get(
      `${Endpoints.getAllBookReviews}/${id}`,
      requestOptions,
    );
    return result;
  } catch (e) {
    printLog(e);
  }
};

export default {
  getTrendingBooks,
  booksForCategory,
  getBookDetails,
  getBookReviews,
  getBookContents
};
