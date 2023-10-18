import { Router } from 'express';
import loginController from '../controller/login.controller';

const router = Router();

router.post('/', loginController.login);

export default router;