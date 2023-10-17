import OrderModel from '../database/models/order.model';
import ProductModel from '../database/models/product.model';
import { Order } from '../types/Order';
import { ServiceResponse } from '../types/ServiceResponse';

async function getAllOrders(): Promise<ServiceResponse<Order[]>> {
  const orders = await OrderModel.findAll({
    include: [{ model: ProductModel, as: 'productIds', attributes: ['id'] }],
  });
  const data = orders.map((order) => ({
    id: order.dataValues.id,
    userId: order.dataValues.userId,
    productIds: order.dataValues
      .productIds?.map((product) => (typeof product !== 'number' ? product.id : product)) || [],
  }));
  return { status: 'SUCCESSFUL', data };
}

export default {
  getAllOrders,
};