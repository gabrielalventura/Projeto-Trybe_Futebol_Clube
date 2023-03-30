import { ModelStatic } from 'sequelize';
import ITeams from '../../interfaces/ITeams';
import Teams from '../models/TeamsModel';

class ServiceTeams {
  model: ModelStatic<Teams> = Teams;

  async getAll(): Promise<Teams[]> {
    const teams = await this.model.findAll();
    return teams;
  }

  async getById(id: string): Promise<ITeams | null> {
    const team = await this.model.findByPk(id);
    return team;
  }
}

export default ServiceTeams;

// desenvolvido com auxilio do Breno Lavalle, Lígia Bicalho e Maria Luiza Suhadolnik e também da documentação disponivel em: https://sequelize.org/docs/v6/other-topics/typescript/#requesting-a-model-class;
// null utilizado por exigencia do lint
