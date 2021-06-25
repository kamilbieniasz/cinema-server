import { application, request, response } from 'express';
import {allMovies, bookPlace, findMovieById, getPlaces, bestOfThree} from '../services/movieService.js';
import applicationException from '../services/applicationException.js';

const moviesEndpoint = (router) => {
    router.get('/api/movies', (request, response) => {
        try {
            response.status(200).send(allMovies());
        } catch (error) {
            applicationException.errorHandler(error, response);
        }
    });

    router.get('/api/movie/:movieId', (request, response) => {
        try {
            response.status(200).send(findMovieById(request.params.movieId));
        } catch (error) {
            applicationException.errorHandler(error, response);
        }
    });

    router.get('/api/movie/top-three', (request, response) => {
        try{
            response.status(200).send(bestOfThree());
        } catch(error) {
            applicationException.errorHandler(error, response);
        }
    })

    router.get('/api/movie/last-three', (request, response) => {
        try{
            response.status(200).send(lastThreeMovie());
        } catch(error) {
            applicationException.errorHandler(error, response);
        }
    })

    router.post('/api/movie-places/:movieId', (request, response) => {
        try {
            response.status(200).send(getPlaces(request.params.movieId, request.body.date, request.body.time));
        } catch (error) {
            applicationException.errorHandler(error, response);
        }
    })

    router.post('/api/places', (request, response) => {
        try{
            response.status(200).send(bookPlace(request.body.id, request.body.date, request.body.time, request.body.places))
        } catch (error) {
            applicationException.errorHandler(error, response);
        }
    })
}

export default moviesEndpoint;
