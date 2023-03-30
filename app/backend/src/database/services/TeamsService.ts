import { ModelStatic } from 'sequelize';
import Teams from '../models/TeamsModel';

class ServiceTeams {
  model: ModelStatic<Teams> = Teams;

  constructor(model: ModelStatic<Teams>) {
    this.model = model;
  }

  async getAll(): Promise<Teams[]> {
    const teams = await this.model.findAll();
    return teams;
  }
}

export default ServiceTeams;

// desenvolvido com auxilio do Breno Lavalle, Lígia Bicalho e Maria Luiza Suhadolnik e também da documentação disponivel em: https://sequelize.org/docs/v6/other-topics/typescript/#requesting-a-model-class;
