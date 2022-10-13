import {devEnvirontment, prodEnvironment} from './config/env.js'

let BaseUrl = devEnvirontment.BASE_URL;

class Endpoints {
   

    static trendingBooks = `${BaseUrl}/books/trending`
    static booksForCategory= `${BaseUrl}/books/types`
}

export default Endpoints;