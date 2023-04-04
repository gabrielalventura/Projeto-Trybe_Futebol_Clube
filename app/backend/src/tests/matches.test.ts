import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';
import matches from './mocks/matchesMock';
// import Teams from '../database/models/TeamsModel';

// import { Response } from 'superagent';

chai.use(chaiHttp);

const { expect } = chai;

describe('Testes para rota /teams', () => {
  it('Testa se é possivel obter todos os matches existentes na tabela Matches através do metodo get na rota /matches', async () => {
    const response = await chai.request(app)
    .get('/matches');

    expect(response.status).to.be.equal(200);
    expect(response.body).to.be.deep.equal(matches);
  });


  afterEach(function () {
    sinon.restore();
  });
});