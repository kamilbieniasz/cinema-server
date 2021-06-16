import prices from '../database/prices.js';

const priceEndpoint = (router) => {
    router.get('/api/prices', (request, response, next) => {
        try {
            response.status(200).send(prices);
        } catch (error) {
            applicationException.errorHandler(error, response);
        }
    })
}

export default priceEndpoint;
