import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import { Request, Response } from 'express';
import OrdersService from '../../../src/service/orders.service';
import OrdersController from '../../../src/controller/order.controller';
import { ServiceResponse } from '../../../src/types/ServiceResponse';
import { Order } from '../../../src/types/Order';

chai.use(sinonChai);

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

describe('OrdersController', function () {
  const req = {} as Request;
  const res = {} as Response;

  beforeEach(function () {
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns(res);
    sinon.restore();
  });
  it ('should get all orders', async function () {
    const getAllOrdersStub = sinon.stub(OrdersService, 'getAllOrders');
    getAllOrdersStub.resolves({
      status: 'SUCCESSFUL',
      data: orders,
    });

    await OrdersController.getAllOrders(req, res);

    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(orders);

    getAllOrdersStub.restore();
  });
});
