import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';

// import { Response } from 'superagent';

import token from './mocks/tokenMock';

chai.use(chaiHttp);

const { expect } = chai;

describe('Testes para rota /login', () => {
  it('Testa se é possivel obter o token após um login valido', async () => {
    const response = await chai.request(app)
    .post('/login');

    expect(response.status).to.be.equal(200);
    expect(response.body).to.be.deep.equal(token);
  });

  it('Testa se /login não permite informações em branco', async () => {
    const response = await chai.request(app)
    .post('/login').send({
      email: "",
      password: "",
    })

    expect(response.status).to.equal(400);
    expect(response.body).to.be.deep.equal({ message: 'All fields must be filled' })
  })

  it('Testa se /login não permite informações erradas', async () => {
    const response = await chai.request(app)
    .post('/login').send({
      email: "emailemail",
      password: "12345",
    })

    expect(response.status).to.equal(401);
    expect(response.body).to.be.deep.equal({ message: 'Invalid email or password' })
  })

  afterEach(function () {
    sinon.restore();
  });
});