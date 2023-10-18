import { expect } from 'chai';
import sinon from 'sinon';
import loginService from '../../../src/service/login.service';
import UserModel from '../../../src/database/models/user.model';
import loginMock from '../../mocks/login.mock';

describe('LoginService', function () {
  beforeEach(function () { sinon.restore(); });
  it('should create user', async function () {
    const createStub = sinon.stub(UserModel, 'create');
    createStub.rejects(new Error('Database error'));

    const user = await loginService.login({
      username: 'test',
      password: 'test',
    });

    expect(user).to.deep.equal({
      status: 'UNAUTHORIZED',
      data: {
        message: 'Username or password invalid',
      },
    });
  });

});
