import { Router } from 'express';
import OrdersController from '../controller/order.controller';

const router = Router();

router.get('/', OrdersController.getAllOrders);

export default router;