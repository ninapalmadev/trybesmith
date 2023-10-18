import jwt from 'jsonwebtoken';
import { TypeId } from '../types/JWT';

const secret = process.env.JWT_SECRET || 'secret';

function sign(payload: TypeId): string {
  return jwt.sign(payload, secret);
}

export default {
  sign,
};