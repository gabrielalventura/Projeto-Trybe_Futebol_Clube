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
}

// uma vez que a tabela Teams só possui dois atributos, id e teamName, tanto faz utilizar o atributo direto ou excluir o atributo que não se deseja, mas em casos de tabelas maiores, optar pelo exclude para redução de poluição no código

export default ServiceMatches;
