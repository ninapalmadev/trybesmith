import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import { Request, Response } from 'express';
import ProductsService from '../../../src/service/products.service';
import ProductsController from '../../../src/controller/product.controller';
import { create } from 'domain';

chai.use(sinonChai);

describe('ProductsController', function () {
  const req = {} as Request;
  const res = {} as Response;

  beforeEach(function () {
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns(res);
    sinon.restore();
  });
  
  it('should create a product', async function () {
    req.body = {
      name: 'Test Product',
      price: 100,
      orderId: 1,
    };

    const createStub = sinon.stub(ProductsService, 'createProduct');
    createStub.resolves({
      status: 'CREATED',
      data: {
        id: 1,
        name: 'Test Product',
        price: 100,
        orderId: 1,
      },
    });

    await ProductsController.createProduct(req, res);

    expect(res.status).to.have.been.calledWith(201);
    expect(res.json).to.have.been.calledWith({
      id: 1,
      name: 'Test Product',
      price: 100,
      orderId: 1,
    });

    createStub.restore();
  });
});
