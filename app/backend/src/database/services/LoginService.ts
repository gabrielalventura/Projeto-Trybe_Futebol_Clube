import { ModelStatic } from 'sequelize';
import * as brcrypt from 'bcryptjs';
import Users from '../models/UsersModel';
import { userToken } from '../../authFunctions/authFunction';
import IReqRole from '../../interfaces/IReqRole';

class ServiceLogin {
  model: ModelStatic<Users> = Users;

  async login(email: string, password: string) {
    const logged = await this.model.findOne({ where: { email } });
    // trecho de código semelhante ao projeto BLOGS API
    if (!logged) {
      return null;
    }
    const lPassword = await brcrypt.compareSync(password, logged.dataValues.password);
    if (lPassword) {
      const token = userToken(logged);
      return { lPassword, token };
    }
  }

  async getRole(email: IReqRole) {
    const logged = await this.model.findOne({ where: { email },
      attributes: ['role'],
    });

    if (logged === null) {
      return null;
    } // necessário pois logged pode ser null

    return logged;
  }
}

export default ServiceLogin;
