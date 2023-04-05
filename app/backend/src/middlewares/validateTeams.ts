import { NextFunction, Request, Response } from 'express';
import Teams from '../database/models/TeamsModel';

const validateOnDB = async (req: Request, res: Response, next: NextFunction) => {
  const { homeTeamId, awayTeamId } = req.body;

  const cadastredHTeam = await Teams.findByPk(homeTeamId);
  const cadastredATeam = await Teams.findByPk(awayTeamId);

  if (!cadastredHTeam || !cadastredATeam) {
    return res.status(404).json({ message: 'There is no team with such id!' });
  }

  return next();
};

export default validateOnDB;
