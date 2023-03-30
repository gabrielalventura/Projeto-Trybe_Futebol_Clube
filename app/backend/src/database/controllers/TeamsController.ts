import { Request, Response } from 'express';
import ServiceTeams from '../services/TeamsService';

class ControllerTeams {
  service: ServiceTeams;

  constructor() {
    this.service = new ServiceTeams();
  }

  async getAll(_req: Request, res: Response): Promise<void> {
    const teams = await this.service.getAll();
    res.status(200).json(teams);
  }
}

export default ControllerTeams;
