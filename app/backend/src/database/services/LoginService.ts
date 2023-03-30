import { ModelStatic } from 'sequelize';
import * as brcrypt from 'bcryptjs';
import Users from '../models/UsersModel';

class ServiceLogin {
  model: ModelStatic<Users> = Users;

  async login(email: string, password: string) {
    const logged = await this.model.findOne({ where: { email } });
    // trecho de código semelhante ao projeto BLOGS API
    if (!logged) {
      return 'Invalid user';
    }
    const lPassword = await brcrypt.compareSync(password, logged.dataValues.password);
    return lPassword;
  }
}

export default ServiceLogin;
