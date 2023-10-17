import { Response, Request } from 'express';
import ordersService from '../service/orders.service';
import mapStatusHTTP from '../utils/mapStatusHTTP';

async function getAllOrders(req: Request, res: Response): Promise<Response> {
  const orders = await ordersService.getAllOrders();
  return res.status(mapStatusHTTP(orders.status)).json(orders.data);
}

export default {
  getAllOrders,
};