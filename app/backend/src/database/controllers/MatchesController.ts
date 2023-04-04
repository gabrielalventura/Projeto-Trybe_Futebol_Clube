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

  async finishById(req: Request, res: Response) {
    const { id } = req.params;

    await this.service.finishById(id); // como não preciso retornar a partida em lugar nenhum do código, não é necessário armazena-lá em uma constante;

    return res.status(200).json({ message: 'Finished' });
  }

  async updateById(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const { homeTeamGoals, awayTeamGoals } = req.body;

    const updatedMatch = await this.service.updateById(id, homeTeamGoals, awayTeamGoals);

    return res.status(200).json({ message: updatedMatch });
  }
}

export default ControllerMatches;
