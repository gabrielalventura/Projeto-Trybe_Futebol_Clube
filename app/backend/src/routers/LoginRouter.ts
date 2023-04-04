import { Router } from 'express';
import ControllerLogin from '../database/controllers/LoginControllers';
import validateEmail from '../middlewares/validateEmail';
import validatePassword from '../middlewares/validatePassword';
import validateToken from '../middlewares/validateToken';

const controller = new ControllerLogin();
const loginRouter = Router();

loginRouter.post('/', validateEmail, validatePassword, (req, res) => {
  controller.toLogin(req, res);
});

loginRouter.get('/role', validateToken, (req, res) => {
  controller.getRole(req, res);
});

export default loginRouter;
