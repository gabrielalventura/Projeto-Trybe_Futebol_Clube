import { ModelStatic } from 'sequelize';
import Matches from '../models/MatchesModel';
import Teams from '../models/TeamsModel';

class ServiceMatches {
  model: ModelStatic<Matches> = Matches;
  teams: ModelStatic<Teams> = Teams;

  async getAll(): Promise<Matches[]> {
    const matches = await this.model.findAll({
      include: [
        {
          model: this.teams,
          as: 'homeTeam',
          attributes: { exclude: ['id'] },
        },
        {
          model: this.teams,
          as: 'awayTeam',
          attributes: { exclude: ['id'] },
        },
      ],
    });
    return matches;
  }

  async getByInProgress(inProgress: string): Promise<Matches[]> {
    const iPMatches = await this.model.findAll({
      where: { inProgress: JSON.parse(inProgress.toLowerCase()) },

      include: [
        {
          model: this.teams,
          as: 'homeTeam',
          attributes: { exclude: ['id'] },
        },
        {
          model: this.teams,
          as: 'awayTeam',
          attributes: { exclude: ['id'] },
        },
      ],
    });
    return iPMatches;
  }
}

export default ServiceMatches;
