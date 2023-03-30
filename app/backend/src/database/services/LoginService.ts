import { ModelStatic } from 'sequelize';
import * as brcrypt from 'bcryptjs';
import Users from '../models/UsersModel';
import { userToken } from '../../authFunctions/authFunction';

class ServiceLogin {
  model: ModelStatic<Users> = Users;

  async login(email: string, password: string) {
    const logged = await this.model.findOne({ where: { email } });
    // trecho de código semelhante ao projeto BLOGS API
    if (!logged) {
      return null;
    }
    const lPassword = brcrypt.compareSync(password, logged.dataValues.password);
    if (lPassword) {
      const token = userToken(logged);
      return token;
    }
  }
}

export default ServiceLogin;
