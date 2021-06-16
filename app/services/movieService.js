import movies from '../database/movies.js';

const findMovieById = (id) => {
    return movies.find(movie => 
        movie.id == id
    )
}

export default findMovieById;
