import moviesEndpoint from './movie.endpoint.js';
import pricesEndpoint from './price.endpoint.js';

const routes = function (router) {
    moviesEndpoint(router);
    pricesEndpoint(router);
};

export default routes;
