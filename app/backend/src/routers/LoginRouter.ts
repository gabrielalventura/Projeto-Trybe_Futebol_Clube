import { Router } from 'express';
import ControllerLogin from '../database/controllers/LoginControllers';
import validateEmail from '../middlewares/validateEmail';
import validatePassword from '../middlewares/validatePassword';

const controller = new ControllerLogin();
const loginRouter = Router();

loginRouter.post('/', validateEmail, validatePassword, (req, res) => {
  controller.toLogin(req, res);
});

export default loginRouter;
