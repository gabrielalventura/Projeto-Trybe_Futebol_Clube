import { Request, Response } from 'express';
import ServiceMatches from '../services/MatchesService';

class ControllerMatches {
  service: ServiceMatches;

  constructor() {
    this.service = new ServiceMatches();
  }

  async getAll(_req: Request, res: Response) {
    const matches = await this.service.getAll();
    res.status(200).json(matches);
  }
}

export default ControllerMatches;
