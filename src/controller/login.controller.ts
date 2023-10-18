import { Request, Response } from 'express';
import loginService from '../service/login.service';
import mapStatusHTTP from '../utils/mapStatusHTTP';

async function login(req: Request, res: Response): Promise<Response> {
  const { username, password } = req.body;

  if (!username || typeof username !== 'string' || !password || typeof password !== 'string') {
    return res.status(400).json({ message: '"username" and "password" are required' });
  }

  const response = await loginService.login({ username, password });
  return res.status(mapStatusHTTP(response.status)).json(response.data);
}

export default {
  login,
};