import { ModelStatic } from 'sequelize';
import Matches from '../models/MatchesModel';
import Teams from '../models/TeamsModel';
import INewMatch from '../../interfaces/INewMatch';

class ServiceMatches {
  model: ModelStatic<Matches> = Matches;
  teams: ModelStatic<Teams> = Teams;

  async getAll(): Promise<Matches[]> {
    const matches = await this.model.findAll({
      include: [
        {
          model: this.teams,
          as: 'homeTeam',
          attributes: ['teamName'],
        },
        {
          model: this.teams,
          as: 'awayTeam',
          attributes: ['teamName'],
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
          attributes: ['teamName'],
        },
        {
          model: this.teams,
          as: 'awayTeam',
          attributes: ['teamName'],
        },
      ],
    });
    return iPMatches;
  }

  async finishById(id: string) {
    const match = await this.model.update(
      { inProgress: false },
      { where: { id } },
    );
    return match;
  }

  async updateById(id: string, scoreA: string, scoreB: string) {
    const updatedMatch = await this.model.update(
      { homeTeamGoals: scoreA,
        awayTeamGoals: scoreB },
      { where: { id } },
    );
    return updatedMatch;
  }

  async createMatches(match: INewMatch) {
    const eHomeTeam = await Teams.findByPk(match.homeTeamId);
    const eAwayTeam = await Teams.findByPk(match.awayTeamId);

    if (!eHomeTeam || !eAwayTeam) {
      return { status: 404, message: 'There is no team with such id!' };
    }
    const cadastredMatch = await this.model.create({
      ...match, inProgress: true,
    });
    return cadastredMatch;
  }
}

// uma vez que a tabela Teams só possui dois atributos, id e teamName, tanto faz utilizar o atributo direto ou excluir o atributo que não se deseja, mas em casos de tabelas maiores, optar pelo exclude para redução de poluição no código

export default ServiceMatches;
