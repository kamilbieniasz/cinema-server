import { application, request, response } from 'express';
import movies from '../database/movies.js';
import findMovieById from '../services/movieService.js';
import applicationException from '../services/applicationException.js';

const moviesEndpoint = (router) => {
    router.get('/api/movies', (request, response, next) => {
        try {
            response.status(200).send(movies);
        } catch (error) {
            applicationException.errorHandler(error, response);
        }
    });

    router.get('/api/movie/:movieId', (request, response, next) => {
        try {
            response.status(200).send(findMovieById(request.params.movieId))
        } catch (error) {
            applicationException.errorHandler(error, response);
        }
    })
}

export default moviesEndpoint;
