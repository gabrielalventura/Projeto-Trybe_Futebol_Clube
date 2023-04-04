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
}

// uma vez que a tabela Teams só possui dois atributos, id e teamName, tanto faz utilizar o atributo direto ou excluir o atributo que não se deseja, mas em casos de tabelas maiores, optar pelo exclude para redução de poluição no código

export default ServiceMatches;
