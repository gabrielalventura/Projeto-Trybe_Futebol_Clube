import { Request, Response } from 'express';
import Teams from '../models/TeamsModel';
import ServiceTeams from '../services/TeamsService';

class ControllerTeams {
  service: ServiceTeams;

  constructor() {
    this.service = new ServiceTeams(Teams);
  }

  async getAll(_req: Request, res: Response): Promise<void> {
    const teams = await this.service.getAll();
    res.status(200).json(teams);
  }
}

export default ControllerTeams;

// Mateus Ramos deu a dica do service precisar do model como argumento;
