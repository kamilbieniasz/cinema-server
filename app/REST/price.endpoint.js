import {allPrices} from '../services/priceService.js';

const priceEndpoint = (router) => {
    router.get('/api/prices', (request, response, next) => {
        try {
            response.status(200).send(allPrices());
        } catch (error) {
            applicationException.errorHandler(error, response);
        }
    })
}

export default priceEndpoint;
