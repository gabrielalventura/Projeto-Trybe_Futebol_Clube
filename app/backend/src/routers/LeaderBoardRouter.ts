import { Router } from 'express';
import ControllerLB from '../database/controllers/LeaderBoardController';

const controller = new ControllerLB();
const LBRouter = Router();

LBRouter.get('/home', (req, res) => {
  controller.getHome(req, res);
});

LBRouter.get('/away', (req, res) => {
  controller.getHome(req, res);
});

export default LBRouter;
