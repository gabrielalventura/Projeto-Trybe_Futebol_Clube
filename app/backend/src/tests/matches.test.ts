import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';
import matches from './mocks/matchesMock';
import finished from './mocks/finishedMatchesMock';
import inProgress from './mocks/inProgressMock';

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

  it('Testa se é exibe somente partidas finalizadas através da rota /matches?inProgress=false', async () => {
    const response = await chai.request(app).get('/matches?inProgress=false');

    expect(response.status).to.be.equal(200);
    expect(response.body).to.be.deep.equal(finished);
  })

  it('Testa se é exibe somente partidas em progressp através da rota /matches?inProgress=true', async () => {
    const response = await chai.request(app).get('/matches?inProgress=true');

    expect(response.status).to.be.equal(200);
    expect(response.body).to.be.deep.equal(inProgress);
  })


  afterEach(function () {
    sinon.restore();
  });
});