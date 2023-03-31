import { ModelStatic } from 'sequelize';
import Matches from '../models/MatchesModel';

class ServiceMatches {
  model: ModelStatic<Matches> = Matches;

  async getAll(): Promise<Matches[]> {
    const matches = await this.model.findAll();
    return matches;
  }
}

export default ServiceMatches;
