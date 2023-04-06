import { Sequelize } from 'sequelize';
import db from '../models';
import IMountLeaderBoard from '../../interfaces/IMountLeaderBoard';
import homeLeaderBoard from '../utils/HomeQuery';

class ServiceLeaderBoard {
  db: Sequelize = db;

  async getHome(): Promise<IMountLeaderBoard[]> {
    const [homeBoard] = await this.db.query(homeLeaderBoard);
    return homeBoard as IMountLeaderBoard[];
  }
}

export default ServiceLeaderBoard;
