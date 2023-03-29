// import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';
// import Teams from '../database/models/TeamsModel';

// import { Response } from 'superagent';
import  teams  from './mocks/teamMock'

chai.use(chaiHttp);

const { expect } = chai;

describe('Testes para rota /teams', () => {
  it('Testa se é possivel obter todos os times existentes na tabela Teams através do metodo get na rota /teams', async () => {
    const response = await chai.request(app)
    .get('/teams');

    expect(response.status).to.be.equal(200);
    expect(response.body.teams).to.be.deep.equal(teams);
  });
});