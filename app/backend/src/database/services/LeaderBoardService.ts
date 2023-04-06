import { Sequelize } from 'sequelize';
import db from '../models';
import IMountLeaderBoard from '../../interfaces/IMountLeaderBoard';
import homeLeaderBoard from '../utils/HomeQuery';

class ServiceLeaderBoard {
  db: Sequelize = db; // usar o db foi uma dica da Ligia Bicalho;

  async getHome(): Promise<IMountLeaderBoard[]> {
    const [homeBoard] = await this.db.query(homeLeaderBoard);
    return homeBoard as IMountLeaderBoard[];
  }

  async getAway(): Promise<IMountLeaderBoard[]> {
    const [awayBoard] = await this.db.query(homeLeaderBoard);
    return awayBoard as IMountLeaderBoard[];
  }
}

export default ServiceLeaderBoard;
