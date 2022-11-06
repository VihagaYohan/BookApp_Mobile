import {devEnvirontment, prodEnvironment} from './config/env.js'

let BaseUrl = devEnvirontment.BASE_URL;

class Endpoints {
   

    static trendingBooks = `${BaseUrl}/books/trending`
    static booksForCategory= `${BaseUrl}/books/types`
    static bookDetails = `${BaseUrl}/books/`
    static getAllBookReviews = `${BaseUrl}/reviews/books`
    static getAllBookContents = `${BaseUrl}/books/content`
}

export default Endpoints;