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
          as: 'matchesAway',
          attributes: { exclude: ['id'] },
        },
        {
          model: this.teams,
          as: 'homeTeam',
          attributes: { exclude: ['id'] },
        },
      ],
    });
    return matches;
  }
}

export default ServiceMatches;
