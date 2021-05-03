import {Router, Request, Response, response, RouterOptions} from 'express';
import {UserController} from './controller/UserController';
import {ActivyController} from './controller/ActivyController';
import {CourseUnitController} from './controller/CourseUnitController';

interface UserRequest {
    name:string;
    email:string;
    password:string;

}

const userController = new UserController()
const activyController = new ActivyController();
const courseUnitController = new CourseUnitController();

const routes = Router();

routes.get('/user', () => console.log("User route"));
routes.post('/user', userController.create);
routes.get('/activy', () => console.log("Activy route"));
routes.post('/activy', activyController.create);
routes.get('/courseunit', () => console.log("Course Unit route"));
routes.post('/courseunit', courseUnitController.create);

/*routes.get('/user', (request, response) => response.json({
    message:'Hello World'
})) */

export default routes;