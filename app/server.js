import express from 'express';
import bodyParser from 'body-parser';
import routes from './REST/routes.js';
import cors from 'cors';

const server = express();
const port = process.env.PORT || 3000

server.use(bodyParser());
server.use(cors());

routes(server);

server.get("/", (request, response) => {
    response.send("Hello World!");
})

server.listen(port, () => {
    console.log("Started application on port %d", port)
});
