import applicationException from '../services/applicationException.js';

const homeEndpoint = (router) => {
    router.get("/", (request, response) => {
        try {
            response.status(200).send("HELLO WORLD");
        } catch (error) {
            applicationException.errorHandler(error, response);
        }
    })
}

export default homeEndpoint;
