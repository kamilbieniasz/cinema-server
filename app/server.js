import express from 'express';
import bodyParser from 'body-parser';
import routes from './REST/routes.js';

const server = express();

server.use(bodyParser());

routes(server);

server.get("/", (request, response) => {
    response.send("Hello World!");
})

server.listen(3000, () => {
    console.log("Started application on port %d", 3000)
});
