import { Request, Response } from 'express';
import ServiceMatches from '../services/MatchesService';

class ControllerMatches {
  service: ServiceMatches;

  constructor() {
    this.service = new ServiceMatches();
  }

  async getAll(req: Request, res: Response) {
    const { inProgress } = req.query;
    if (inProgress) {
      const iPMatches = await this.service.getByInProgress(inProgress as string); // deve se utilizar as strings pois existem diferentes retornos possiveis para getByInProgress como QueryString.ParsedQs;
      return res.status(200).json(iPMatches);
    }
    const matches = await this.service.getAll();
    res.status(200).json(matches);
    // mantem trecho de código que retorna todos os matches feito no requisito anterior, caso não haja a chamada da querystring, a resposta deve ser todos sem filtro;
  }
}

export default ControllerMatches;
