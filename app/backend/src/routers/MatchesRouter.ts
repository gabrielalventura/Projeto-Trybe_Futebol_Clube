import { Router } from 'express';
import ControllerMatches from '../database/controllers/MatchesController';

const controller = new ControllerMatches();
const matchesRouter = Router();

matchesRouter.get('/', (req, res) => {
  controller.getAll(req, res);
});

export default matchesRouter;
