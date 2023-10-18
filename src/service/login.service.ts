import bcrypt from 'bcryptjs';
import JWT from '../utils/JWT';
import UserModel from '../database/models/user.model';
import { Token } from '../types/Token';
import { ServiceResponse } from '../types/ServiceResponse';
import { UserLogin } from '../types/User';

async function login(user: UserLogin): Promise<ServiceResponse<Token>> {
  const userFound = await UserModel.findOne({ where: { username: user.username } });
  if (!userFound || !bcrypt.compareSync(user.password, userFound.dataValues.password)) {
    return { status: 'UNAUTHORIZED', data: { message: 'Username or password invalid' } };
  }
  
  const { id } = userFound.dataValues;

  const token = JWT.sign({ id });
  return { status: 'SUCCESSFUL', data: { token } };
}

export default { 
  login, 
};