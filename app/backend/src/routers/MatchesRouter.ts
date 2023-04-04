import { Router } from 'express';
import ControllerMatches from '../database/controllers/MatchesController';
import validateToken from '../middlewares/validateToken';

const controller = new ControllerMatches();
const matchesRouter = Router();

matchesRouter.get('/', (req, res) => {
  controller.getAll(req, res);
});

matchesRouter.patch('/:id', validateToken, (req, res) => {
  controller.updateById(req, res);
});

matchesRouter.patch('/:id/finish', validateToken, (req, res) => {
  controller.finishById(req, res);
});

export default matchesRouter;
