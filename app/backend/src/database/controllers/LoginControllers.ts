import { Request, Response } from 'express';
import ServiceLogin from '../services/LoginService';
// import IReqRole from '../../interfaces/IReqRole';

class ControllerLogin {
  service: ServiceLogin;

  constructor() {
    this.service = new ServiceLogin();
  }

  async toLogin(req: Request, res: Response): Promise<Response> {
    const { email, password } = req.body;
    const user = await this.service.login(email, password);

    if (user) {
      return res.status(200).json(user);
    }

    // if (!email || !password) {
    //   return res.status(400).json({ message: 'All fields must be filled' });
    // }

    return res.status(401).json({ message: 'Invalid email or password' });
  }

  // async getRole(req: IReqRole, res: Response) {
  //   const email = req.email as string;
  //   const role = await this.service.getRole(email);

  //   return res.status(200).json({ role });
  // }
}

export default ControllerLogin;
