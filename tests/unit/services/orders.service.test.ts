import { expect } from 'chai';
import sinon from 'sinon';
import OrdersService from '../../../src/service/orders.service';
import Order from '../../../src/database/models/order.model';
import ordersMock from '../../mocks/orders.mock';

describe('OrdersService', function () {
  beforeEach(function () { sinon.restore(); });
  it('should get all orders', async function () {
    const orderList = ordersMock.orders.map((order) => {
      const productIds = Order.build(order);
      productIds.dataValues.productIds = order.productIds;
      return productIds;
    });
    sinon.stub(Order, 'findAll').resolves(orderList);
    
    const ordersService = await OrdersService.getAllOrders();

    expect(ordersService.status).to.equal('SUCCESSFUL');
    expect(ordersService.data).to.deep.equal(ordersMock.orders);
  });
});
