import {Router, RouterOptions} from 'express';

const routes = Router();

routes.get('/user', (request, response) => response.json({
    message:'Hello World'
}))

export default routes;