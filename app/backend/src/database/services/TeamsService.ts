import { ModelStatic } from 'sequelize';
import ITeams from '../../interfaces/ITeams';
import Teams from '../models/TeamsModel';

class ServiceTeams {
  model: ModelStatic<Teams> = Teams;

  constructor(model: ModelStatic<Teams>) {
    this.model = model;
  }

  async getall(): Promise<ITeams[]> {
    const teams = await this.model.findAll();
    return teams;
  }
}

export default ServiceTeams;
