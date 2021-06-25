import moviesEndpoint from './movie.endpoint.js';
import pricesEndpoint from './price.endpoint.js';
import homeEndpoint from './home.endpoint.js';

const routes = function (router) {
    homeEndpoint(router);
    moviesEndpoint(router);
    pricesEndpoint(router);
};

export default routes;
