import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import { Request, Response } from 'express';
import LoginController from '../../../src/controller/login.controller';
import LoginService from '../../../src/service/login.service';
import { ServiceResponse } from '../../../src/types/ServiceResponse';
import { Token } from '../../../src/types/Token';
import loginMock from '../../mocks/login.mock';

chai.use(sinonChai);

describe('LoginController', function () {
  const req = {} as Request;
  const res = {} as Response;

  beforeEach(function () {
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns(res);
    sinon.restore();
  });

  it('failed login withou name', async function () {
    req.body = loginMock.loginWithoutUsername;
    const ServiceResponse: ServiceResponse<Token> = {
      status: 'BAD_REQUEST',
      data: { message: '"username" and "password" are required' },
    };

    sinon.stub(LoginService, 'login').resolves(ServiceResponse);
    await LoginController.login(req, res);

    expect(res.status).to.have.been.calledWith(400);
    expect(res.json).to.have.been.calledWith(ServiceResponse.data);
  });

  it('successful login return token', async function () {
    req.body = loginMock.validLogin;
    const token = { token: 'eyJhbGciOiJIUzI1NiIsInR' }
    const ServiceResponse: ServiceResponse<Token> = {
      status: 'SUCCESSFUL',
      data: token,
    };

    sinon.stub(LoginService, 'login').resolves(ServiceResponse);
    await LoginController.login(req, res);

    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(token);

  });
});
