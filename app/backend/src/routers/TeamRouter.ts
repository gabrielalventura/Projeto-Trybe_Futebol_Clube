import { Router } from 'express';
import ControllerTeams from '../database/controllers/TeamsController';

const controller = new ControllerTeams();
const teamsRouter = Router();

teamsRouter.get('/', (req, res) => {
  controller.getAll(req, res);
});
teamsRouter.get('/:id', (req, res) => {
  controller.getById(req, res);
});

export default teamsRouter;
