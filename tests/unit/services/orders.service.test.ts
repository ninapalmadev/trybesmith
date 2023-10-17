import { expect } from 'chai';
import sinon from 'sinon';
import OrdersService from '../../../src/service/orders.service';
import Order from '../../../src/database/models/order.model';

const orders = [
  {
    id: 1,
    userId: 1,
    productIds: [2, 1],
  },
  {
    id: 2,
    userId: 3,
    productIds: [4, 3],
  },
]

describe('OrdersService', function () {
  beforeEach(function () { sinon.restore(); });
  // it('should get all orders', async function () {
  //   const findAllStub = sinon.stub(Order, 'findAll');
  //   findAllStub.rejects(new Error('Database error'));

  //   const orders = await OrdersService.getAllOrders();

  //   expect(orders).to.deep.equal({
  //     status: 'INVALID_DATA',
  //     data: {
  //       message: 'Could not get orders',
  //     },
  //   });
  // });

  // it('should successfully retrieve all orders and respond with status 200 and the list of orders', async function () {
  //   const orderList = orders.map((order) => {
  //     const orderWithValues = Order.build(order);
  //     orderWithValues.setDataValue('productIds', order.productIds);
  //     return orderWithValues;
  //   }
  //   );
  //   const findAllStub = sinon.stub(Order, 'findAll');
  //   findAllStub.resolves(orderList);

  //   const ordersResponse = await OrdersService.getAllOrders();

  //   expect(ordersResponse).to.eq('SUCCESSFUL');
  //   expect(ordersResponse).to.deep.equal(orders);
  // })
});
