import { Request, Response } from 'express';
import ServiceLeaderBoard from '../services/LeaderBoardService';

class ControllerLB {
  service:ServiceLeaderBoard;

  constructor() {
    this.service = new ServiceLeaderBoard();
  }

  async getHome(_req: Request, res: Response) {
    const homeBoard = await this.service.getHome();
    return res.status(200).json(homeBoard);
  }
}

export default ControllerLB;
